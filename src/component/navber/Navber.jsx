import React, { useContext } from "react";
import { Link, NavLink } from "react-router"; // ✅ make sure react-router-dom is imported
import Authcontext from "../../contextprovider/Authcontext";

const Navber = () => {
  const { user, logout } = useContext(Authcontext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const activeLinkStyle =
    "text-amber-400 font-semibold border-b-2 border-amber-400";
  const normalLinkStyle =
    "text-white hover:text-amber-300 transition-colors duration-200";

  return (
    <div className="navbar bg-gray-800 p-4 text-white shadow-sm">
      {/* Left side (logo + title) */}
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost text-xs md:text-xl flex items-center gap-2">
          <img
            src="https://media.istockphoto.com/id/1132282369/photo/men-playing-video-games.jpg?s=1024x1024&w=is&k=20&c=OhYzYQ6dfTph97_73JIhvPK6JMNXmUnh2Acf6HTa3Fo="
            alt="Logo"
            className="w-16 h-12 rounded-md"
          />
          Imagination World
        </NavLink>
      </div>

      {/* Center (navigation links) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/games"
              className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}
            >
              Games
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right side (user info or signup) */}
      <div className="navbar-end gap-3">
        {user ? (
          <div className="flex items-center gap-2">
            {/* <img
              src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-amber-400"
            /> */}
            <div className="text-left">
              <p className="text-sm font-semibold">{user.displayName || "Unknown User"}</p>
              <p className="text-xs text-gray-300">{user.email}</p>
            </div>
            {/* <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-500 hover:bg-red-600 text-white ml-2"
            >
              Logout
            </button>
            <Link to="/update-profile">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Update Info
              </button>
            </Link> */}
            <div className="dropdown ">
  <div tabIndex={0} role="button" className="btn bg-amber-400 m-1">
    <img
              src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-amber-400"
            />
  </div>
  <ul tabIndex="-1" className="dropdown-content text-red-600 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={handleLogout}><a>Log Out</a></li>
    <Link to={"/update-profile"}><li><a>Update Profile</a></li></Link>
  </ul>

</div>
          </div>
        ) : (
          <NavLink to="/register">
            <button className="btn bg-amber-400 text-black hover:bg-amber-500">
              Sign Up
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navber;

