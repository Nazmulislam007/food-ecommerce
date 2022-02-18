import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "../../context/Context";
import classes from "./cart.module.css";

const Cart = () => {
  const [total, setTotal] = useState();
  const {
    state: { cart },
    dispatch,
  } = useCart();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        return acc + Number(curr.price * curr.qty);
      }, 0)
    );
  }, [cart]);

  return (
    <div className={classes.cartContainer}>
      <h1>total - {total} tk</h1>
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
                <select
                  name="select"
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_QTY",
                      payload: { id: prod.id, qty: e.target.value },
                    })
                  }
                  id="select"
                >
                  {[...Array(prod.inStock).keys()].map((x) => {
                    return (
                      <option key={x} value={prod.qty}>
                        {x + 1}
                      </option>
                    );
                  })}
                </select>
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
