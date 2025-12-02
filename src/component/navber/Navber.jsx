
import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router";
import Authcontext from "../../contextprovider/Authcontext";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navber = () => {
  const { user, logout } = useContext(Authcontext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const activeLink =
    "text-amber-400 font-bold border-b-2 border-amber-400 transition-all duration-300";
  const normalLink =
    "text-white hover:text-amber-300 transition-all duration-200";

  return (
    <>
     
      <div
        className={`backdrop-blur-lg bg-black/40 w-full z-50 fixed top-0 left-0 transition-all duration-300 shadow-md
        ${isScrolled ? "py-2 shadow-xl" : "py-4"}
      `}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5">

        
          <Link
            to="/"
            className="flex items-center gap-2 text-red-500 font-extrabold text-xl md:text-3xl"
          >
            <img
              src="https://img.pikbest.com/png-images/20241022/shadow-hacker-gaming-logo-design_10991552.png!bwr800"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            TapNPlay
          </Link>

         
          <div className="hidden lg:flex gap-8 text-lg font-bold">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Home</NavLink>
            <NavLink to="/games" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Games</NavLink>
            
            {user && (
              <>
              <NavLink to="/tuna" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Turnament</NavLink>
            <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? activeLink : normalLink)}>LeaderBoard</NavLink>

                
               
              </>
            )}
            <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)}>About</NavLink>
             <NavLink to="/contact" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Contact</NavLink>
                <NavLink to="/support" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Support</NavLink>
            <NavLink to="/faq" className={({ isActive }) => (isActive ? activeLink : normalLink)}>FAQ</NavLink>

          </div>

          
          <div className="flex items-center gap-3">

            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

         
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn bg-amber-400 p-1">
                  <img
                    src={
                      user.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <ul className="dropdown-content menu bg-base-100 text-red-600 rounded-box w-52 p-2 shadow-md z-50">
                  <li onClick={logout}><a>Logout</a></li>
                  <li>
                    <Link to="/update-profile">Update Profile</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/register">
                <button className="btn bg-amber-400 text-black hover:bg-amber-500">
                  Sign Up
                </button>
              </Link>
            )}

          
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

    
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-2/3 h-full bg-black/90 backdrop-blur-lg p-6 shadow-lg z-40 text-white flex flex-col gap-6 text-xl font-bold">
         <NavLink onClick={() => setIsOpen(false)} to="/">Home</NavLink>
    <NavLink onClick={() => setIsOpen(false)} to="/games">Games</NavLink>

    {user && (
      <>
        <NavLink onClick={() => setIsOpen(false)} to="/tuna">Turnament</NavLink>
        <NavLink onClick={() => setIsOpen(false)} to="/leaderboard">LeaderBoard</NavLink>
      </>
    )}

    <NavLink onClick={() => setIsOpen(false)} to="/about">About</NavLink>
    <NavLink onClick={() => setIsOpen(false)} to="/contact">Contact</NavLink>
    <NavLink onClick={() => setIsOpen(false)} to="/support">Support</NavLink>
    <NavLink onClick={() => setIsOpen(false)} to="/faq">FAQ</NavLink>
        </div>
      )}
    </>
  );
};

export default Navber;
