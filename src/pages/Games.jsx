import React from 'react';
import { useLoaderData } from 'react-router';
import Game from './Game';
import Gamesbanner from './Gamesbanner';

const Games = () => {
    const gamesdata=useLoaderData()
    // console.log(gamesdata);
    
    return (
        <div>
            <Gamesbanner/>
            <h2 className='text-red-500 text-center text-2xl font-semibold'> Our Games</h2>
            <div className='grid grid-cols-3 gap-4 p-2'>
                {
                    gamesdata.map(games=><Game games={games}></Game>)
                }
            </div>
        </div>
    );
};

export default Games;