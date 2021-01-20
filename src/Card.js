import React from 'react';

// name, email, id are props of the robots object which are being passed in index.js
// note that {id} is also being used in tge image src url
const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt={`robot card}`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;