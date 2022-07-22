import React, { useEffect } from "react";
import { SliderData } from "../../images/SliderData";
import "./minibar.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import axios from "axios";

function Minibar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [minibarValue, setMinibarValue] = useState("");
  const [minibarMenuList, setMinibarMenuList] = useState([]);

  console.log(minibarValue);
  useEffect(() => {
    const getMinibarMenus = async () => {
      const res = await axios.get("/minibarFeatures?minibar=" + minibarValue);
      setMinibarMenuList(res.data);
      console.log(minibarMenuList);
    };
    getMinibarMenus();
  }, [minibarValue]);

  return (
    <div className="minibar">
      <div
        onClick={() => setToggleMenu(false)}
        className={toggleMenu ? "minibar-menu active" : "minibar-menu"}
      >
        <div className="minibar-menu-container">
          <ul>
            {minibarMenuList.map((minibar) => (
              <li>
                <div className="minibar-menu-container-item">
                  <div className="minibar-menu-container-item-left">
                    <span>{minibar.price} ₺</span>
                  </div>

                  <div className="minibar-menu-container-item-right">
                    <h3>{minibar.title}</h3>
                    <p>{minibar.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Navbar></Navbar>
      <div className="header">
        <div className="header-img">
          <img src={SliderData[0].image} alt="" />
          <strong>Minibar</strong>
        </div>
      </div>
      <div className="restaurant">
        <div className="restaurant-text">
          <h2>Minibar Menü</h2>
        </div>
        <div className="restaurant-features">
          <div className="restaurant-features-menu">
            <img
              src="https://www.ramadasakarya.com/menugorsel/129743.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setMinibarValue("atistirmalik")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="https://www.ramadasakarya.com/menugorsel/427745.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setMinibarValue("mesrubat")}
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Minibar;
