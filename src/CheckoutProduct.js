import React from "react";
import { Rating } from "@mui/material";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBaket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="chcekoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className='"checkoutProduct__rating'>
          {Array({ rating })
            .fill()
            .map(() => (
              <Rating />
            ))}
        </div>
        <button onClick={removeFromBaket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
