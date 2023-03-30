import React from "react";

function ItemPhone({ phone }) {
  return (
    <>
      <img src={`../images/${phone.imageFileName}`} alt={phone.name} />
      <h2>{phone.name}</h2>
    </>
  );
}

export default ItemPhone;
