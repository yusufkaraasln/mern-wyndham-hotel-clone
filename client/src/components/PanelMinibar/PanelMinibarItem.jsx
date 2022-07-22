import React from "react";
import "./panel-contact-item.scss";

function PanelMinibarItem({ minibar }) {
  return (
    <div className="contact-item-single">
      <span>Menü: {minibar.minibar}</span>
    </div>
  );
}

export default PanelMinibarItem;
