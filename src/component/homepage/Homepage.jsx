import React from 'react';
import Banner from './Banner';
import PopularGames from './PopulerGames';
import Newslatter from './Newslatter';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <PopularGames/>
            <Newslatter/>
        </div>
    );
};

export default Homepage;