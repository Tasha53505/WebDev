import React from 'react';

const Card= (props)  => {
    const {name, email, id } = props;
   return ( 
   <div className="bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-2  ">
        <img src= {`https://robohash.org/${id}?200x200` }alt="Robots" />
    <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
    </div>
    </div>
    );
}

export default Card;