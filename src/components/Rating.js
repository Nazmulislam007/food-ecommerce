import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onclick }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <span
            onClick={() => onclick(index)}
            key={index}
            style={{ cursor: "pointer" }}
          >
            {rating > index ? (
              <AiFillStar fontSize="25px" color="rgb(55, 185, 125)" />
            ) : (
              <AiOutlineStar fontSize="25px" color="rgb(55, 185, 125)" />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
