import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../images/circular.png";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [restaurantActive, setRestaurantActive] = useState(false);
  const [departmentActive, setDepartmentActive] = useState(false);
  const [meetingActive, setMeetingActive] = useState(false);

  const changeBackground = () => {
    const scroll = window.scrollY;
    if (scroll) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="small-item">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        {hamburgerActive ? (
          <i
            onClick={() => setHamburgerActive(false)}
            class="fa-solid fa-xmark"
          ></i>
        ) : (
          <i
            onClick={() => setHamburgerActive(true)}
            class="fa-solid fa-bars"
          ></i>
        )}
      </div>

      <div
        className={
          hamburgerActive
            ? "small-navbar-container ready"
            : "small-navbar-container"
        }
      >
        <Link to="/">Anasayfa</Link>
        <details>
          <summary onClick={() => setMeetingActive(!meetingActive)}>
            Kurumsal{" "}
            {meetingActive ? (
              <i class="fa-solid fa-angle-up"></i>
            ) : (
              <i class="fa-solid fa-angle-down"></i>
            )}
          </summary>
          <Link style={{}} to="/aboutus">
            Hakkımızda
          </Link>
          <br />
          <Link to="/career">IK | Kariyer</Link>
        </details>
        <Link to="/rooms">Odalarımız</Link>
        <Link to="/spa-wellness">Spa & Wellness</Link>
        <details>
          <summary onClick={() => setRestaurantActive(!restaurantActive)}>
            Restoran{" "}
            {restaurantActive ? (
              <i class="fa-solid fa-angle-up"></i>
            ) : (
              <i class="fa-solid fa-angle-down"></i>
            )}
          </summary>
          <Link style={{}} to="/restaurant">
            Restoran Menü
          </Link>
          <br />
          <Link to="/minibar">Minibar</Link>
        </details>
        <details>
          <summary onClick={() => setDepartmentActive(!departmentActive)}>
            Toplantı{" "}
            {departmentActive ? (
              <i class="fa-solid fa-angle-up"></i>
            ) : (
              <i class="fa-solid fa-angle-down"></i>
            )}
          </summary>
          <Link
            style={{ paddingLeft: "10px", fontSize: "18px" }}
            to="/meeting-rooms"
          >
            Toplantı Salonları
          </Link>
          <br />
          <Link style={{ paddingLeft: "10px", fontSize: "18px" }} to="/meeting-form">
            Toplantı Teklif Formu
          </Link>
        </details>
        <Link to="/contact">İletişim</Link>
      </div>

      <ul>
        <li>
          <Link to={"/"}>Anasayfa</Link>
        </li>
        <li>
          Kurumsal
          <ul>
            <li>
              <Link to={"/aboutus"}>Hakkımızda</Link>
            </li>
            <Link to={"/career"}>
            <li>İK | Kariyer</li>
            
            </Link>
          </ul>
        </li>
        <li>
          <Link to={"/rooms"}>Odalarımız</Link>
        </li>
        <li>
          <Link to={"/spa-wellness"}>Spa & Wellness</Link>
        </li>
        <li>
          Restoran
          <ul>
            
            <li>
              <Link to={"/restaurant"}>
              Restoran Menü</Link>
            </li>
            <li>
              <Link to={"/minibar"}>
              Minibar
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Toplantı
          <ul>
            <li>
              <Link to={"/meeting-rooms"}>Toplantı Salonları</Link>
            </li>
            <Link to={"/meeting-form"}>
              <li>Toplantı Teklif Formu</li>
            </Link>
          </ul>
        </li>
        <li>
          <Link to="/contact">İletişim</Link>
        </li>
        {/* <li>
          <button className="lang">
            <i class="fa-solid fa-globe"></i>
          </button>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
