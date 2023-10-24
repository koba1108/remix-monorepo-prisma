import type {MetaFunction} from "@remix-run/node";
import {Card, CardProps} from "ui";

export const meta: MetaFunction = () => {
  return [
    {title: "Admin App"},
    {name: "description", content: "Welcome to Admin App!"},
  ];
};

const card: CardProps = {
  image: "https://fastly.picsum.photos/id/237/200/300.jpg",
  heading: "Admin App Card Heading",
  price: "$9.99",
  description: "This is a card description",
  onClick: () => {
    alert("You clicked the card!");
  },
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
