import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";


function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://img.freepik.com/free-vector/flat-black-friday-twitch-cover_23-2149103021.jpg?w=2000"
          alt=""
        ></img>
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty.</h2>
            <p>Check your Saved for later items below or continue shopping.</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
          
        </div>
      )}
    </div>
  );
}

export default Checkout;
