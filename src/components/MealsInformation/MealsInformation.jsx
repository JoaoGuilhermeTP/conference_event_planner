const MealsInformation = () => {

  const handleMealSelection = (index) => {};

  return (
    <div className="items-information">
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

export default MealsInformation;
