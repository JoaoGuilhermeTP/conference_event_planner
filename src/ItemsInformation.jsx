import React from "react";
import VenueItem from "./VenueItem";
import { incrementQuantity, decrementQuantity } from "./venueSlice";
import { useSelector, useDispatch } from "react-redux";

const ItemsInformation = ({
  venueItems,
  venueTotalCost,
}) => {
  const dispatch = useDispatch();

  const remainingAuditoriumQuantity =
    3 -
    venueItems.find((item) => item.name === "Auditorium Hall (Capacity:200)")
      .quantity;

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
    <div className="items-information">
      <div id="venue" className="venue_container container_main">
        <div className="text">
          <h1>Venue Room Selection</h1>
        </div>
        <div className="venue_selection">
          {venueItems.map((item, index) => (
            <VenueItem
              key={index}
              item={item}
              index={index}
              venueItems={venueItems}
              handleRemoveFromCart={handleRemoveFromCart}
              remainingAuditoriumQuantity={remainingAuditoriumQuantity}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="total_cost">Total Cost: ${venueTotalCost}</div>
      </div>

      {/*Necessary Add-ons*/}
      <div id="addons" className="venue_container container_main">
        <div className="text">
          <h1> Add-ons Selection</h1>
        </div>
        <div className="addons_selection"></div>
        <div className="total_cost">Total Cost:</div>
      </div>

      {/* Meal Section */}
      <div id="meals" className="venue_container container_main">
        <div className="text">
          <h1>Meals Selection</h1>
        </div>

        <div className="input-container venue_selection"></div>
        <div className="meal_selection"></div>
        <div className="total_cost">Total Cost: </div>
      </div>
    </div>
  );
};

export default ItemsInformation;
