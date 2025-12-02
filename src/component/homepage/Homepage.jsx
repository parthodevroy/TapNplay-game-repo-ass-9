import React from 'react';
import Banner from './Banner';
import PopularGames from './PopulerGames';
import Newslatter from './Newslatter';
import NewsSection from './NewsSection';
import { FeaturesGame } from './FeaturesGame';
import { TopGamers } from './TopGamers';
import GameLogoSlider from './GameLogoSlider';


const Homepage = () => {
    return (
        <div>
            <Banner/>
            <PopularGames/>
           <GameLogoSlider/>
            <NewsSection/>
            <FeaturesGame/>
            <TopGamers/>
            
            <Newslatter/>
        </div>
    );
};

export default Homepage;