import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { capitalize } from "../utils";

function ItemPhone({ phone }) {
  console.log(phone);
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img
              src={`${process.env.PUBLIC_URL}/images/${phone.imageFileName}`}
              alt={phone.name}
              width="200px"
            />
            <h2>{phone.name}</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>Color: {capitalize(phone.color)} </p>

            <p>{phone.description}</p>

            <p>Price: {phone.price}€</p>

            <p>Processor: {phone.processor}</p>

            <p>Ram: {phone.ram}</p>

            <p>Screen features: {phone.screen}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default ItemPhone;
