import { toggleMealSelection } from "../../store/mealsSlice";
import { useDispatch } from "react-redux";

const MealItem = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleMealSelection = (index) => {
    console.log("HANDLE MEAL SELECTION TRIGGERED");
    dispatch(toggleMealSelection(index));
  };

  return (
    <div className="meal_item" key={index} style={{ padding: 15 }}>
      <div className="inner">
        <input
          type="checkbox"
          id={`meal_${index}`}
          checked={item.selected}
          onChange={() => handleMealSelection(index)}
        />
        <label htmlFor={`meal_${index}`}> {item.name} </label>
      </div>
      <div className="meal_cost">${item.cost}</div>
    </div>
  );
};

export default MealItem;
