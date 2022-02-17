import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "../../context/Context";
import classes from "./cart.module.css";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  return (
    <div className={classes.cartContainer}>
      <div className={classes.wrapper}>
        {cart.map((prod) => {
          return (
            <div key={prod.id} className={classes.cart}>
              <img
                src={prod.image}
                alt={prod.name}
                className={classes.cart__img}
              />
              <div className={classes.content}>
                <h3 className="cart__name">{prod.name}</h3>
                <p className="cart__price">tk - {prod.price}</p>
                <p className="cart__deli">{prod.fastDelivery}</p>
              </div>
              <AiFillDelete
                onClick={() =>
                  dispatch({ type: "REMOVE_TO_CART", payload: prod })
                }
                fontSize="25px"
                color="red"
                cursor="pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
