import React from 'react';
import Navber from '../component/navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';
import Homepage from '../component/homepage/Homepage';
import Game from '../pages/Game';
import Gamesbanner from '../pages/detailspages/Gamebaner';
import Games from '../pages/Games';

const Mainlayout = () => {
    return (
        <div className='bg-gray-900'>
           <header>
             <Navber/>
             
           </header>
            <main>
                
                <Outlet>
                   
                    <Games></Games>
                </Outlet>
            </main>
            <Footer/>
        </div>
    );
};

export default Mainlayout;