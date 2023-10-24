import type {MetaFunction} from "@remix-run/node";
import {Card, CardProps} from "ui";

export const meta: MetaFunction = () => {
  return [
    {title: "Customer App"},
    {name: "description", content: "Welcome to Customer App"},
  ];
};

const card: CardProps = {
  image: "https://picsum.photos/seed/picsum/200/300",
  heading: "Customer App Card Heading",
  price: "$99.99",
  description: "This is a card description",
  onClick: () => {
    alert("You clicked the card in Customer App!");
  }
}

export default function Index() {
  return (
    <Card
      image={card.image}
      heading={card.heading}
      price={card.price}
      description={card.description}
      onClick={card.onClick}
    />
  );
}
