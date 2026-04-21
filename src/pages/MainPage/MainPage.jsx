import React, { useState } from "react";
import "./MainPage.css";
import TotalCost from "../../components/TotalCost/TotalCost";
import NavBar from "../../components/NavBar/NavBar";
import ItemsInformation from "../../components/ItemsInformation/ItemsInformation";
import { useSelector, useDispatch } from "react-redux";


const MainPage = () => {
  const [showItems, setShowItems] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const venueItems = useSelector((state) => state.venue);
  const dispatch = useDispatch();

  const handleToggleItems = () => {
    console.log("handleToggleItems called");
    setShowItems(!showItems);
  };

  const handleIncrementAvQuantity = (index) => {};

  const handleDecrementAvQuantity = (index) => {};

  const handleMealSelection = (index) => {};

  const getItemsFromTotalCost = () => {
    const items = [];
  };

  const items = getItemsFromTotalCost();

  const ItemsDisplay = ({ items }) => {};

  const calculateTotalCost = (section) => {
    let totalCost = 0;
    if (section === "venue") {
      venueItems.forEach((item) => {
        totalCost += item.cost * item.quantity;
      });
    }
    return totalCost;
  };

  const venueTotalCost = calculateTotalCost("venue");

  const navigateToProducts = (idType) => {
    if (idType == "#venue" || idType == "#addons" || idType == "#meals") {
      if (showItems) {
        // Check if showItems is false
        setShowItems(!showItems); // Toggle showItems to true only if it's currently false
      }
    }
  };

  return (
    <>
      <NavBar navigateToProducts={navigateToProducts} showItems={showItems} setShowItems={setShowItems} />
      <div className="main_container">
        {!showItems ? (
          <ItemsInformation venueItems={venueItems} venueTotalCost={venueTotalCost} />
        ) : (
          <div className="total_amount_detail">
            <TotalCost totalCosts={totalCosts} handleClick={handleToggleItems} ItemsDisplay={() => <ItemsDisplay items={items} />} />
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
