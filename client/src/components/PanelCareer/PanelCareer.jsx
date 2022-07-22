import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./panel-contact.scss";
import PanelCareerItem from "./PanelCareerItem";
import { Link,Routes,Route,Outlet } from "react-router-dom";

function PanelCareer() {
  const [careerList, setCareerList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/career");
      setCareerList(res.data);
    };
    fetchPosts();
  });

  return (
    <div className="panel-contact">
      <div className="panel-contact-item">
        {careerList.map((career) => (
          <Link  to={`/panel/career/${career._id}`}>
            <PanelCareerItem key={career._id} career={career} />
          </Link>
        ))}
      </div>


     
    </div>
  );
}

export default PanelCareer;
