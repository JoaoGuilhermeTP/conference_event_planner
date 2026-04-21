import React, { useState } from "react";
import "./MainPage.css";
import TotalCost from "../../components/TotalCost/TotalCost";
import NavBar from "../../components/NavBar/NavBar";
import ItemsInformation from "../../components/ItemsInformation/ItemsInformation";
import AddOnsInformation from "../../components/AddOnsInformation/AddOnsInformation";
import MealsInformation from "../../components/MealsInformation/MealsInformation";
import { useSelector, useDispatch } from "react-redux";

const MainPage = () => {
  const [showItems, setShowItems] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const venueItems = useSelector((state) => state.venue);
  const avItems = useSelector((state) => state.addOns);

  const handleToggleItems = () => {
    console.log("handleToggleItems called");
    setShowItems(!showItems);
  };

  const calculateTotalCost = (section) => {
    let totalCost = 0;
    if (section === "venue") {
      venueItems.forEach((item) => {
        totalCost += item.cost * item.quantity;
      });
    } else if (section === "addOns") {
      avItems.forEach((item) => {
        totalCost += item.cost * item.quantity
      })
    }
    return totalCost;
  };

  const navigateToProducts = (idType) => {
    if (idType == "#venue" || idType == "#addons" || idType == "#meals") {
      if (showItems) {
        // Check if showItems is false
        setShowItems(!showItems); // Toggle showItems to true only if it's currently false
      }
    }
  };

  const getItemsFromTotalCost = () => {
    const items = [];
  };
  const ItemsDisplay = ({ items }) => {};

  const items = getItemsFromTotalCost();
  const venueTotalCost = calculateTotalCost("venue");
  const addOnsTotalCost = calculateTotalCost("addOns");

  return (
    <>
      <NavBar navigateToProducts={navigateToProducts} showItems={showItems} setShowItems={setShowItems} />
      <div className="main_container">
        {!showItems ? (
          <div>
            <ItemsInformation venueItems={venueItems} venueTotalCost={venueTotalCost} />
            <AddOnsInformation avItems={avItems} addOnsTotalCost={addOnsTotalCost} />
            <MealsInformation />
          </div>
        ) : (
          <div className="total_amount_detail">
            <TotalCost totalCosts={totalCosts} handleClick={handleToggleItems} ItemsDisplay={() => <ItemsDisplay items={items} />}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
