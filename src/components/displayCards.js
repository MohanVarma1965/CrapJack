import React from 'react';
import '../styles/displayCards.css';

//Component to display the individual cards
const displayCards = (props) => {

  //individual image containers
  const cards = props.data.map(val => {
    return (
      <div className="cardsSubContainer">
        <img  className="cardsImage" src={val.image} alt={val.code}/>
      </div>
    );
  });
  //when we have the back value from props as true show the back images
  const back = props.data.map(() => {
    return (
      <div className="cardsSubContainer">
        <img className="cardsImage" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Card_back_06.svg" alt="back"/>
      </div>
    );
  });

  return (
    <div className="cardsContainer">{props.back? back : cards}</div>
  );
};

export default displayCards;

