import React, { useEffect } from "react";
import { SliderData } from "../../images/SliderData";
import "./restaurant.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import axios from "axios";

function Restaurant() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [foodValue, setFoodValue] = useState("");
  const [foodMenuList, setFoodMenuList] = useState([]);

  console.log(foodValue);
  useEffect(() => {
    const getFoodMenus = async () => {
      const res = await axios.get("/foodFeatures/?food=" + foodValue);
      setFoodMenuList(res.data);
      console.log(foodMenuList);
    };
    getFoodMenus();
  },[foodValue]);

  return (
    <div className="restaurant">
      <div
        onClick={() => setToggleMenu(false)}
        className={toggleMenu ? "restaurant-menu active" : "restaurant-menu"}
      >
        <div className="restaurant-menu-container">
          <ul>
            {foodMenuList.map((food) => (
              <li>
                <div className="restaurant-menu-container-item">
                  <div className="restaurant-menu-container-item-left">
                    <span>{food.price} ₺</span>
                  </div>

                  <div className="restaurant-menu-container-item-right">
                    <h3>{food.title}</h3>
                    <p>{food.description}</p>
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
          <strong>Restoran</strong>
        </div>
      </div>
      <div className="restaurant">
        <div className="restaurant-text">
          <h2>Dolce Restoran Menü & Oda Servisi</h2>
        </div>
        <div className="restaurant-features">
          <div className="restaurant-features-menu">
            <img
              src="https://www.ramadasakarya.com/menugorsel/606461.jpg"
              alt=""
              onClick={() => {
                setToggleMenu(true);
                setFoodValue("breakfast");
              }}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="https://www.ramadasakarya.com/menugorsel/542606.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("omlet")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="	https://www.ramadasakarya.com/menugorsel/287824.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("tost")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="https://www.ramadasakarya.com/menugorsel/759691.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("hamburger")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="https://www.ramadasakarya.com/menugorsel/976045.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("makarna")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="	https://www.ramadasakarya.com/menugorsel/979026.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("salatalar")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="	https://www.ramadasakarya.com/menugorsel/795734.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("et")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="	https://www.ramadasakarya.com/menugorsel/49043.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("tatli")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="https://www.ramadasakarya.com/menugorsel/88865.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("corba")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="	https://www.ramadasakarya.com/menugorsel/947778.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("baslangiclar")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="		https://www.ramadasakarya.com/menugorsel/22560.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("tavuk")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="		https://www.ramadasakarya.com/menugorsel/307066.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("deniz")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="	https://www.ramadasakarya.com/menugorsel/358996.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("icecekler")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="	https://www.ramadasakarya.com/menugorsel/936829.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("milkshake")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="	https://www.ramadasakarya.com/menugorsel/344016.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("soguk-icecekler")}
            />
          </div>
          <div className="restaurant-features-menu">
            <img
              src="	https://www.ramadasakarya.com/menugorsel/825377.jpg"
              alt=""
              onClick={() => setToggleMenu(true)}
              onMouseEnter={() => setFoodValue("bitki-caylari")}
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Restaurant;
