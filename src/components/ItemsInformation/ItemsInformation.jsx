import React from "react";
import VenueItem from "../VenueItem/VenueItem";
import AddOnsInformation from "../AddOnsInformation/AddOnsInformation";

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
            />
          ))}
        </div>
        <div className="total_cost">Total Cost: ${venueTotalCost}</div>
      </div>
    </div>
  );
};

export default ItemsInformation;
