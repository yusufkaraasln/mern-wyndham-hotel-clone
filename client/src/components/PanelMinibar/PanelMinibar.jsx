import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./panel-contact.scss";
import PanelMinibarItem from "./PanelMinibarItem";
import { Link,Routes,Route,Outlet } from "react-router-dom";

function PanelMinibar() {
  const [minibarList, setMinibarList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/minibar");
      setMinibarList(res.data);
    };
    fetchPosts();
  });
  

  return (
    <div className="panel-contact">
      <div className="panel-contact-item">
        {minibarList.map((minibar) => (
          <Link  to={`/panel/minibar-menu/item/?minibar=${minibar.minibar}`}>
            <PanelMinibarItem key={minibar._id} minibar={minibar} />
          </Link>
        ))}
      </div>


     
    </div>
  );
}

export default PanelMinibar;
