import React from "react";
import VenueItem from "../VenueItem/VenueItem";

const ItemsInformation = ({ venueItems, venueTotalCost }) => {

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
