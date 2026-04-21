import AddOnItem from "../AddOnItem/AddOnItem";

const AddOnsInformation = ({avItems, addOnsTotalCost}) => {

  const handleIncrementAvQuantity = (index) => {};
  const handleDecrementAvQuantity = (index) => {};
  
  return (
    <div className="items-information">
      <div id="addons" className="venue_container container_main">
        <div className="text">
          <h1> Add-ons Selection</h1>
        </div>
        <div className="addons_selection">
          {avItems.map((item, index) => (
            <AddOnItem key={index} index={index} item={item} />
          ))}
        </div>
        <div className="total_cost">Total Cost: {addOnsTotalCost}</div>
      </div>
    </div>
  );
};

export default AddOnsInformation;
