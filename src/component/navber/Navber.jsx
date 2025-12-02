import React, { useContext } from "react";
import { Link, NavLink } from "react-router"; 
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
    "text-amber-400 font-bold border-b-2 border-amber-400";
  const normalLinkStyle =
    "text-white hover:text-amber-300 transition-colors duration-200";

  return (
    <div className="navbar max-w-6xl mx-auto text-white shadow-sm">
      
      {/* Left side (logo + title) */}
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost text-red-800 text-xs md:text-3xl font-extrabold flex items-center gap-2">
          <img
            src="https://img.pikbest.com/png-images/20241022/shadow-hacker-gaming-logo-design_10991552.png!bwr800"
            alt="Logo"
            className="w-12 h-12 rounded-md"
          />
         TapNPlay
        </NavLink>
      </div>

      {/* Center (navigation links) */}
      <div className="navbar-center hidden font-bold  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li className="text-xl font-extrabold">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl font-extrabold">
            <NavLink
              to="/games"
              className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}
            >
              Games
            </NavLink>
          </li>
         {user &&<>
          <li className="text-xl font-extrabold">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}
            >
              About
            </NavLink>
          </li>
          <li className="text-xl font-extrabold">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}
            >
              Contact
            </NavLink>
          </li>
         </>}
        </ul>
      </div>

      {/* Right side (user info or signup) */}
      <div className="navbar-end gap-3">
        {user ? (
          <div className="flex items-center gap-2">
           
            <div className="text-left">
              <p className="text-sm text-yellow-600 font-semibold">{user.displayName || "Unknown User"}</p>
              <p className="text-xs text-red-600">{user.email}</p>
            </div>
            
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
