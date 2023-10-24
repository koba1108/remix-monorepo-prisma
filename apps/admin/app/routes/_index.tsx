import type {MetaFunction} from "@remix-run/node";
import { Card, CardProps } from "ui";

export const meta: MetaFunction = () => {
  return [
    {title: "Admin App"},
    {name: "description", content: "Welcome to Admin App!"},
  ];
};

const card: CardProps = {
  image: "https://devio2023-media.developers.io/wp-content/uploads/2021/11/eycatch-960x504.png",
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
