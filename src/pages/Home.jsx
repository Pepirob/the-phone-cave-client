import ListPhone from "../components/ListPhone";
import React, { useEffect, useState } from "react";
import { getAllPhones } from "../services/phones.services";

function Home() {
  const [phones, setPhones] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const PhonesResponse = await getAllPhones();
      setPhones(PhonesResponse.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!isFetching && (
        <>
          {phones.length ? (
            <ListPhone phones={phones} />
          ) : (
            <p>We ran out of phones!</p>
          )}
        </>
      )}
    </>
  );
}

export default Home;
