import MealItem from "../MealItem/MealItem";
import { useDispatch } from "react-redux";

const MealsInformation = ({mealsItems, numberOfPeople, setNumberOfPeople, mealsTotalCost }) => {

  const dispatch = useDispatch();

  const handlePeopleChange = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value || value < 1)) {
      setNumberOfPeople(1);
    } else {
      setNumberOfPeople(value);
    }
  };

  return (
    <div className="items-information">
      <div id="meals" className="venue_container container_main">
        <div className="text">
          <h1>Meals Selection</h1>
        </div>

        <div className="input-container venue_selection">
          <label htmlFor="numberOfPeople">Number of People:</label>
          <input
            type="number"
            className="input_box5"
            id="numberOfPeople"
            value={numberOfPeople}
            onChange={handlePeopleChange}
            min="1"
          />
        </div>
        <div className="meal_selection">
          {mealsItems.map((item,index) => (
            
            <MealItem key={index} index={index} item={item} />
          ))}

        </div>
        <div className="total_cost">Total Cost: {mealsTotalCost}</div>
      </div>
    </div>
  );
};

export default MealsInformation;
