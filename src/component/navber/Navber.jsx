
import React, { useContext } from "react";
import { Link } from "react-router";
import Authcontext from "../../contextprovider/Authcontext";

const Navber = () => {
  const { user, logout } = useContext(Authcontext);

  const handleLogout = async () => {
    try {
      await logout(); // Firebase logout
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="navbar bg-gray-800 p-4 text-white shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <img
            src="https://media.istockphoto.com/id/1132282369/photo/men-playing-video-games.jpg?s=1024x1024&w=is&k=20&c=OhYzYQ6dfTph97_73JIhvPK6JMNXmUnh2Acf6HTa3Fo="
            alt="Logo"
            className="w-16 h-12 rounded-md"
          />
          Imagination World
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/ourapps">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <>
            {/* User profile image + name/email */}
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-amber-400"
              />
              <div>
                <p className="text-sm font-semibold">{user.displayName || "Unknown User"}</p>
                <p className="text-xs">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-red-500 text-white ml-2"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <Link to="/register">
            <button className="btn bg-amber-400 text-black">Sign Up</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
