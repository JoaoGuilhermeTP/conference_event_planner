import React from "react";
import { incrementAvQuantity, decrementAvQuantity } from "../../store/avSlice";
import { useSelector, useDispatch } from "react-redux";

const AddOnItem = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (index) => {
    if (item.quantity >= 10) {
      return;
    }
    dispatch(incrementAvQuantity(index));
  };

  const handleRemoveFromCart = (index) => {
    if (item.quantity > 0) {
      dispatch(decrementAvQuantity(index));
    }
  };

  return (
    <div className="venue_main">
      <div className="img">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="text">{item.name}</div>
      <div>${item.cost}</div>
      <div className="button_container">
        <div className="button_container">
          <button
            className={
              item.quantity === 0
                ? " btn-warning btn-disabled"
                : "btn-warning btn-plus"
            }
            onClick={() => handleRemoveFromCart(index)}
          >
            &#8211;
          </button>
          <span className="selected_count">{item.quantity}</span>
          <button
            className={
              item.quantity === 10
                ? " btn-success btn-disabled"
                : "btn-success btn-plus"
            }
            onClick={() => handleAddToCart(index)}
          >
            &#43;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOnItem;
