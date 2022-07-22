import React from "react";
import { useState } from "react";
import { SliderData } from "../../images/SliderData";
import "./contact.scss";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

function Contact({ slides }) {
  const securityCode = useRef("");

  const [current, setCurrent] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

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
        const res = await axios.post("/contact", newContact);
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

  }

  console.log(securityCode.current.value);

  return (
    <div className="contact-room">
      <Navbar></Navbar>
      <div className="header">
        <section className="slider">
          <i
            class="left-arrow fa-solid fa-chevron-left"
            onClick={prevSlide}
          ></i>
          <i
            class="rigt-arrow fa-solid fa-chevron-right"
            onClick={nextSlide}
          ></i>
          {SliderData.map((slide, i) => {
            return (
              <div className={i === current ? "slide active" : "slide"} key={i}>
                {i === current && (
                  <img
                    key={i}
                    src={slide.image}
                    className="slider-image"
                    alt="ramada sakarya"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
            );
          })}
        </section>
      </div>

      <div className="contact-room-content">
        <div className="contact-room-content-header">
          <span>İletişim</span>
        </div>
        <div className="contact-room-content-container">
          <div className="contact-room-content-container-address">
            <div className="contact-room-content-container-address-title">
              <span>Adres</span>
            </div>
            <div className="contact-room-content-container-address-desc">
              <ul>
                <li>Güllük Mah. Adnan Menderes Cad. No:145</li>
                <li>Adapazarı / Sakarya</li>
                <li>
                  Tel: <a href="tel://02646662244">0264 666 22 44</a>
                </li>
                <li>
                  Fax : <a href="tel://02642824444">0264 282 44 44</a>
                </li>
                <li>
                  Email :{" "}
                  <a href="mailto:info@ramadasakarya.com">
                    info@ramadasakarya.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-room-content-container-form">
            <form onSubmit={handleSubmit}>
              <div className="contact-room-content-container-form-item">
                <div className="contact-room-content-container-form-item-title">
                  <span>Adınız</span>
                </div>
                <div className="contact-room-content-container-form-item-input">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Tam Adınız"
                  />
                </div>
              </div>
              <div className="contact-room-content-container-form-item">
                <div className="contact-room-content-container-form-item-title">
                  <span>Email Adresiniz</span>
                </div>
                <div className="contact-room-content-container-form-item-input">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="contact-room-content-container-form-item">
                <div className="contact-room-content-container-form-item-title">
                  <span>Telefon</span>
                </div>
                <div className="contact-room-content-container-form-item-input">
                  <input
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Telefon"
                  />
                </div>
              </div>
              <div className="contact-room-content-container-form-item">
                <div className="contact-room-content-container-form-item-title">
                  <span>Mesaj</span>
                </div>
                <div className="contact-room-content-container-form-item-input">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mesajınızı Giriniz"
                  ></textarea>
                </div>
              </div>
              <div className="contact-room-content-container-form-item">
                <div className="contact-room-content-container-form-item-title">
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
                  className="contact-room-content-container-form-item-input"
                >
                  <input
                    ref={securityCode}
                    type="number"
                    placeholder="Yukarıdaki Kodu Giriniz"
                  />
                  <button onClick={handleClick}>Gönder</button>
                   
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

export default Contact;
