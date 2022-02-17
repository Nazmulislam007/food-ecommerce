import React, { useState } from "react";
import Rating from "./Rating";

const Filter = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="left">
      <form>
        <div className="radioBtn">
          <input type="radio" value="topPrice" name="price" id="topPrice" />
          <label htmlFor="topPrice">Top Price</label>
        </div>
        <div className="radioBtn">
          <input type="radio" value="lowPrice" name="price" id="lowPrice" />
          <label htmlFor="lowPrice">Low Price</label>
        </div>
        <div className="radioBtn">
          <input
            type="checkbox"
            value="includeOutOfStock"
            name="includeOutOfStock"
            id="includeOutOfStock"
          />
          <label htmlFor="includeOutOfStock">Include Out of Stock</label>
        </div>
        <div className="radioBtn">
          <input
            type="checkbox"
            value="onlyFirstDelivery"
            name="onlyFirstDelivery"
            id="onlyFirstDelivery"
          />
          <label htmlFor="onlyFirstDelivery">Only First delivery</label>
        </div>
        <div className="rating">
          <label htmlFor="rating">Rating </label>
          <Rating rating={rating} onclick={(index) => setRating(index + 1)} />
        </div>
        <button>Clear Filter</button>
      </form>
    </div>
  );
};

export default Filter;
