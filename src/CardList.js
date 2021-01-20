import React from 'react';
import Card from './Card';

// each child in an array should have a unique identifier so we use key={i} in braces because it's JavaScript
const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card 
              key={i} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email}  
            />
          );
        })
      }
    </div>
  );
}

export default CardList;