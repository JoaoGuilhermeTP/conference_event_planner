import React from "react";
import { incrementQuantity, decrementQuantity } from "../../store/venueSlice";
import { useSelector, useDispatch } from "react-redux";

const VenueItem = ({ item, index, venueItems }) => {
  const dispatch = useDispatch();

  const currentAuditoriumQuantity = venueItems.find((item) => item.name === "Auditorium Hall (Capacity:200)").quantity;

  const remainingAuditoriumQuantity = 3 - currentAuditoriumQuantity;

  const handleAddToCart = (index) => {
    if (
      venueItems[index].name === "Auditorium Hall (Capacity:200)" &&
      venueItems[index].quantity >= 3
    ) {
      return;
    }
    dispatch(incrementQuantity(index));
  };

  const handleRemoveFromCart = (index) => {
    if (venueItems[index].quantity > 0) {
      dispatch(decrementQuantity(index));
    }
  };

  return (
    <div className="venue_main">
      <div className="img">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="text">{item.name}</div>
      <div>${item.cost}</div>
      <div className="button_container">
        {venueItems[index].name === "Auditorium Hall (Capacity:200)" ? (
          <>
            <button
              className={
                venueItems[index].quantity === 0
                  ? "btn-warning btn-disabled"
                  : "btn-minus btn-warning"
              }
              onClick={() => handleRemoveFromCart(index)}
            >
              &#8211;
            </button>
            <span className="selected_count">
              {venueItems[index].quantity > 0
                ? ` ${venueItems[index].quantity}`
                : "0"}
            </span>
            <button
              className={
                remainingAuditoriumQuantity === 0
                  ? "btn-success btn-disabled"
                  : "btn-success btn-plus"
              }
              onClick={() => handleAddToCart(index)}
            >
              &#43;
            </button>
          </>
        ) : (
          <div className="button_container">
            <button
              className={
                venueItems[index].quantity === 0
                  ? " btn-warning btn-disabled"
                  : "btn-warning btn-plus"
              }
              onClick={() => handleRemoveFromCart(index)}
            >
              &#8211;
            </button>
            <span className="selected_count">
              {venueItems[index].quantity > 0
                ? ` ${venueItems[index].quantity}`
                : "0"}
            </span>
            <button
              className={
                venueItems[index].quantity === 10
                  ? " btn-success btn-disabled"
                  : "btn-success btn-plus"
              }
              onClick={() => handleAddToCart(index)}
            >
              &#43;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueItem;
