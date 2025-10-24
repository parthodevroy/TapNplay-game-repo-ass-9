import React from 'react';
import { Link } from 'react-router';

const Game = ({games}) => {
    console.log(games);
    const {coverPhoto,title,description,id}=games
    
    return (
        <div>
            <div className="card bg-stone-900 text-white w-96 h-[400px] object-cover shadow-sm">
  <figure>
    <img
      src={coverPhoto}
      alt="Shoes" className='h-[300px] object-cover' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-yellow-700">{title}</h2>
    <p className='font-semibold text-xl'>{description} <button className="font-semibold text-red-500"><Link to={`/details/${id}`}>....View Details....</Link></button></p>
    {/* <div className="card-actions justify-center">
      <button className=" btn bg-gray-500">view Details....</button>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default Game;