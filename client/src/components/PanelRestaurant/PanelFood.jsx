import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./panel-contact.scss";
import PanelFoodItem from "./PanelFoodItem";
import { Link,Routes,Route,Outlet } from "react-router-dom";

function PanelFood() {
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/food");
      setFoodList(res.data);
    };
    fetchPosts();
  });
  

  return (
    <div className="panel-contact">
      <div className="panel-contact-item">
        {foodList.map((food) => (
          <Link  to={`/panel/menu/item/?food=${food.food}`}>
            <PanelFoodItem key={food._id} food={food} />
          </Link>
        ))}
      </div>


     
    </div>
  );
}

export default PanelFood;
