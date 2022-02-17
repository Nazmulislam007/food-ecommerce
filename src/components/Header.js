import React from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../context/Context";

const Header = () => {
  const {
    state: { cart },
  } = useCart();

  return (
    <>
      <nav>
        <Link to="/">
          <h2>Hungry</h2>
        </Link>
        <input type="text" />
        <Link to="/cart">
          <BsCartFill fontSize="2rem" />
          <span className="count">{cart.length ? cart.length : ""}</span>
        </Link>
      </nav>
    </>
  );
};

export default Header;
