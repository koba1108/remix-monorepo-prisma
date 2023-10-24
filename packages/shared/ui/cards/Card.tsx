import React from 'react';

export interface CardProps {
  image: string;
  heading: string;
  price: string;
  description: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export function Card(props: CardProps) {
  return (
    <div>
      <img src={props.image} alt={props.description}/>
      <h3>{props.heading}</h3>
      <span>{props.price}</span>
      <button onClick={() => props.onClick()}>{props.children || 'Add to cart'}</button>
    </div>
  );
}

export default Card;
