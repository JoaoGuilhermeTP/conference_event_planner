import React from "react";

const VenueItem = ({
  item,
  index,
  venueItems,
  handleRemoveFromCart,
  remainingAuditoriumQuantity,
  handleAddToCart,
}) => {
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
