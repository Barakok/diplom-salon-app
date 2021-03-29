import React from "react";
import { Button, Card} from "react-bootstrap";

let cardArray = [
  {
    id: 0,
    name: "Мужская стрижка",
    description:
      "Чтобы выглядеть стильно, начните с прически! Салон красоты Fleur приглашает записаться к парикмахеру-стилисту и предлагает доступные цены на все виды парикмахерских услуг. Салонные процедуры для волос помогут справиться",
    price: "300р",
    duration: "45",
    category: ["hair", "forMen"],
    image: "https://picsum.photos/300",
  },
];

const ServiceItem = () => {
  return (
    <Card style={{ width: "20rem", marginBottom: "20px" }}>
      <Card.Img variant="top" src={cardArray[0].image} />
      <Card.Body>
        <Card.Title>{cardArray[0].name}</Card.Title>
        <Card.Text>{cardArray[0].description}</Card.Text>
        <Card.Text>
          Длительность процедуры: {cardArray[0].duration} мин.
        </Card.Text>
        <Card.Text>Стоимость: {cardArray[0].price}</Card.Text>
        <Button variant="danger">Заказать</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceItem;
