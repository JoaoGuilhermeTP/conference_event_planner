import React, { useState } from "react";
import "./MainPage.css";
import TotalCost from "../TotalCost/TotalCost";
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
  const mealsItems = useSelector((state) => state.meals);

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
      });
    } else if (section === "meals") {
      mealsItems.forEach((item) => {
        if (item.selected) {
          totalCost += item.cost * numberOfPeople;
        }
      });
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
    venueItems.forEach((item) => {
      if (item.quantity > 0) {
        items.push({...item, type: "venue"});
      }
    });
    avItems.forEach((item) => {
      if (item.quantity > 0) {
        if (!items.some((i) => i.name === item.name && i.type === "av")) {
          items.push({...item, type: "av"})
        }
      }
    });
    mealsItems.forEach((item) => {
      if (item.selected) {
        items.push({...item, type: "meals", numberOfPeople: numberOfPeople});
      };
    })
    return items;
  };

  const ItemsDisplay = ({ items }) => {
	console.log(items);
	return <>
		<div className="display_box1">
			{items.length === 0 && <p>No items selected</p>}
        	<table className="table_item_data">
				<thead>
					<tr>
						<th>Name</th>
						<th>Unit Cost</th>
						<th>Quantity</th>
						<th>Subtotal</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item, index) => (
						<tr key={index}>
							<td>{item.name}</td>
							<td>${item.cost}</td>
							<td>
								{item.type === "meals" || item.numberOfPeople
								? ` For ${numberOfPeople} people`
								: item.quantity}
							</td>
							<td>{item.type === "meals" || item.numberOfPeople
								? `${item.cost * numberOfPeople}`
								: `${item.cost * item.quantity}`}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</>
};


  const items = getItemsFromTotalCost();
  const venueTotalCost = calculateTotalCost("venue");
  const addOnsTotalCost = calculateTotalCost("addOns");
  const mealsTotalCost = calculateTotalCost("meals");

  const totalCosts = {
    venue: venueTotalCost,
    av: addOnsTotalCost,
    meals: mealsTotalCost,
  };
  console.log(totalCosts);

  return (
    <>
      <NavBar navigateToProducts={navigateToProducts} showItems={showItems} setShowItems={setShowItems} />
      <div className="main_container">
        {!showItems ? (
          <div>
            <ItemsInformation venueItems={venueItems} venueTotalCost={venueTotalCost} />
            <AddOnsInformation avItems={avItems} addOnsTotalCost={addOnsTotalCost} />
            <MealsInformation mealsItems={mealsItems} numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople} mealsTotalCost={mealsTotalCost} />
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