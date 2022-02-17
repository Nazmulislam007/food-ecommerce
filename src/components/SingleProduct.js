import React from "react";
import { useCart } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  return (
    <>
      <div className="cart">
        <img src={prod.image} alt={prod.name} className="cart__img" />
        <div>
          <h3 className="cart__name">{prod.name}</h3>
          <p className="cart__price">tk - {prod.price}</p>
          <p className="cart__deli">
            {prod.fastDelivery ? `First Delivery` : `Normal time Delivery`}
          </p>
          <div>
            {cart.some((p) => p.id === prod.id) ? (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_TO_CART", payload: prod })
                }
                style={{ cursor: "pointer", background: "#d63031" }}
              >
                Remove To Cart
              </button>
            ) : !prod.inStock ? (
              <button disabled style={{ background: "gray" }}>
                Out Of Stock
              </button>
            ) : (
              <button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
                style={{ cursor: "pointer" }}
              >
                Add To Cart
              </button>
            )}

            <div>
              <Rating rating={prod.rating} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
