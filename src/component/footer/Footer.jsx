
import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-16 px-6 md:px-20">

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-gray-700">

       
        <div>
         <div className="navbar-start text-3xl text-red-500 font-bold">
        
          <img
            src="https://img.pikbest.com/png-images/20241022/shadow-hacker-gaming-logo-design_10991552.png!bwr800"
            alt="Logo"
            className="w-12 h-12 rounded-md"
          />
         TapNPlay
       
      </div>
          <p className="text-gray-400 leading-relaxed">
            GameHub is a modern gaming studio creating next-level PC,
            console & mobile games with immersive experiences.
          </p>

          <div className="flex items-start gap-3 mt-5">
            <FaMapMarkerAlt className="text-green-400 text-xl" />
            <p>2972 Westheimer Rd, Santa Ana, Illinois 85486</p>
          </div>
        </div>

       
        <div>
          <h2 className="text-xl font-bold text-gray-100 mb-4">
            Our Studio
          </h2>
          <ul className="space-y-2">
            <li><Link className="hover:text-white">About Us</Link></li>
            <li><Link className="hover:text-white">Our Team</Link></li>
            <li><Link className="hover:text-white">Our Games</Link></li>
            <li><Link className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-bold text-gray-100 mb-4">
            Services
          </h2>
          <ul className="space-y-2">
            <li><Link className="hover:text-white">Game Design</Link></li>
            <li><Link className="hover:text-white">Game Development</Link></li>
            <li><Link className="hover:text-white">Art Direction</Link></li>
            <li><Link className="hover:text-white">Multiplatform</Link></li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-xl font-bold text-gray-100 mb-4">
            Support
          </h2>
          <ul className="space-y-2">
            <li><Link className="hover:text-white">Community</Link></li>
            <li><Link className="hover:text-white">FAQs</Link></li>
            <li><Link className="hover:text-white">License</Link></li>
            <li><Link className="hover:text-white">Privacy</Link></li>
          </ul>

          <div className="mt-6">
            <p className="text-gray-400">hello@example.com</p>
            <p className="text-lg text-white font-bold mt-2 flex items-center gap-2">
              <FaPhoneAlt /> +123 888 000 33
            </p>
            <Link className="text-green-400 hover:text-green-300 mt-2 inline-block">
              CHAT WITH US
            </Link>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center -mt-6">
        <img
          src="https://cdn.pixabay.com/photo/2024/01/25/06/56/ai-generated-8531084_1280.png"
          alt="controller"
          className="w-40 drop-shadow-2xl"
        />
      </div>

      
      <div className="border-t border-gray-700 mt-10 py-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>© 2025 GameHub. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link className="hover:text-white">home</Link>
          <Link className="hover:text-white">news</Link>
          <Link className="hover:text-white">projects</Link>
          <Link className="hover:text-white">about</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
