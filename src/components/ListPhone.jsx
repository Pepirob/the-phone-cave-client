import ItemPhone from "./ItemPhone";

function ListPhone({ phones }) {
  return (
    <>
      {phones.map((phone) => {
        return <ItemPhone key={phone.id} phone={phone} />;
      })}
    </>
  );
}

export default ListPhone;
