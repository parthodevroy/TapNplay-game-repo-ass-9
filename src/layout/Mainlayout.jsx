import React from 'react';
import Navber from '../component/navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';
import Homepage from '../component/homepage/Homepage';

const Mainlayout = () => {
    return (
        <div className='bg-gray-900'>
           <header>
             <Navber/>
             
           </header>
            <main><Outlet/></main>
            <Footer/>
        </div>
    );
};

export default Mainlayout;