import React from "react";
import { useState } from "react";
import { SliderData } from "../../images/SliderData";
import "./meeting-form.scss";
import Footer from "../../components/Footer/Footer";
import { Meeting } from "../../images/Meeting";
import axios from "axios";
import { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
function MeetingForm({ slides }) {
  const [current, setCurrent] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  
  const securityCode = useRef("");

 

  let randomNumber = Math.random().toString();
  randomNumber = randomNumber.substring(2, randomNumber.length);

  const number = randomNumber.substring(0, 4);

  console.log(number);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      name,
      email,
      phone,
      message,
    };
    try {
      if (securityCode.current.value === number) {
        const res = await axios.post("/meeting", newContact);
        console.log(res);
      }
    } catch (e) {}
  };

  const handleClick = () => {
    if (securityCode.current.value === number) {
      alert("Mesajınız başarıyla gönderildi.");
    } else {
      alert("Güvenlik kodunuz hatalı.");
    }
  };

  return (
    <div className="meeting-form">
      <Navbar></Navbar>
      <div className="header">
         <img src={Meeting[0].image} alt="" />
      </div>

      <div className="meeting-form-content">
        <div className="meeting-form-content-header">
          <span>Toplantı & Davet Formu</span>
        </div>
        <div className="meeting-form-content-container">
          <div className="meeting-form-content-container-form">
            <form onSubmit={handleSubmit}>
              <div className="meeting-form-content-container-form-item">
                <div className="meeting-form-content-container-form-item-title">
                  <span>Adınız</span>
                </div>
                <div className="meeting-form-content-container-form-item-input">
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tam Adınız"
                  />
                </div>
              </div>
              <div className="meeting-form-content-container-form-item">
                <div className="meeting-form-content-container-form-item-title">
                  <span>Email Adresiniz</span>
                </div>
                <div className="meeting-form-content-container-form-item-input">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="meeting-form-content-container-form-item">
                <div className="meeting-form-content-container-form-item-title">
                  <span>Telefon</span>
                </div>
                <div className="meeting-form-content-container-form-item-input">
                  <input
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Telefon"
                  />
                </div>
              </div>
              <div className="meeting-form-content-container-form-item">
                <div className="meeting-form-content-container-form-item-title">
                  <span>Mesaj</span>
                </div>
                <div className="meeting-form-content-container-form-item-input">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mesajınızı Giriniz"
                  ></textarea>
                </div>
              </div>
              <div className="meeting-form-content-container-form-item">
                <div className="meeting-form-content-container-form-item-title">
                  <span>
                    Güvenlik : <strong>{number}</strong>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="meeting-form-content-container-form-item-input"
                >
                  <input type="number" ref={securityCode} placeholder="Yukarıdaki Kodu Giriniz" />
                  <button onClick={handleClick} type="submit">Gönder</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default MeetingForm;
