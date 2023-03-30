import React from "react";
import { Link } from "react-router-dom";

function ItemPhone({ phone }) {
  console.log(phone);
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/images/${phone.imageFileName}`}
        alt={phone.name}
        width="200px"
      />
      <Link to="">
        <h2>{phone.name}</h2>
      </Link>
    </>
  );
}

export default ItemPhone;
