import React from "react";
import "./panel-contact-item.scss";

function PanelFoodItem({ food }) {
  return (
    <div className="contact-item-single">
      <span>Menü: {food.food}</span>
    </div>
  );
}

export default PanelFoodItem;
