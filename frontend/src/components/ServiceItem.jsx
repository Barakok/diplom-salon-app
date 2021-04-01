import React from "react";
import { Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const ServiceItem = ({service}) => {
  const {id, name, image} = service;
  return (
    <Card style={{boxShadow: "0 0 10px black", width: "20rem", marginBottom: "20px" }}>
      <Card.Img variant="top" src={image}/>
        <Card.ImgOverlay style={{color: "white", boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.2)", fontSize: "15px"}}>
          <Card.Title style={{marginTop:"50px",textAlign: "center"}}>{name}</Card.Title>
          <Link style={{marginLeft: "70px"}} to={`/service/${id}`}>
            <Button variant="dark">Подробнее</Button>
          </Link>
        </Card.ImgOverlay>
    </Card>
  );
};

export default ServiceItem;
