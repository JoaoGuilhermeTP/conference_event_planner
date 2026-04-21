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
          {avItems.map((item) => (
            <div>{item.name} - {item.quantity}</div>
          ))}
        </div>
        <div className="total_cost">Total Cost:</div>
      </div>
    </div>
  );
};

export default AddOnsInformation;
