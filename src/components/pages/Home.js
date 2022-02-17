import React from "react";
import { useCart } from "../../context/Context";
import Filter from "../Filter";
import SingleProduct from "../SingleProduct";

const Home = () => {
  const {
    state: { porducts },
  } = useCart();

  return (
    <>
      <div className="container">
        <Filter />
        <div className="wrapper">
          <div className="productContainer">
            {porducts.map((prod) => {
              return <SingleProduct prod={prod} key={prod.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
