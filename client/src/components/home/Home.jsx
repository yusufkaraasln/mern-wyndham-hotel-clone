import React, { useEffect, useState, forwardRef } from "react";
import logo from "../../images/logo.svg";
import circular from "../../images/circular.png";
import "react-datepicker/dist/react-datepicker.css";

import { SliderData } from "../../images/SliderData";

import DatePicker from "react-datepicker";

import "./home.scss";
function Home({ slides }) {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);

  const [room, setRoom] = useState(0);
  const [adult, setAdult] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [leftDate, setLeftDate] = useState(new Date());
  const [booking, setBooking] = useState(true);
  console.log(startDate.getUTCDate());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        padding: "10px 20px",
        background: "#fff",
        border: "none",
        color: "#000",
        letterSpacing: ".1rem",
        borderRadius: "5px",
        background: "#fff",
        cursor: "pointer",
        border: "none",
      }}
      className="example-custom-input"
      onClick={onClick}
      id="date-picker"
      ref={ref}
    >
      {value}
    </button>
  ));
  const ExampleCustomInput2 = forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        padding: "10px 20px",
        background: "#fff",
        border: "none",
        color: "#000",
        letterSpacing: ".1rem",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
      className="example-custom-input"
      onClick={onClick}
      id="date-picker-left"
      ref={ref}
    >
      {value}
    </button>
  ));
  const [child, setChild] = useState(0);

  setTimeout(() => {
    setNext(() => next + 1);
  }, 3000);

  const length = slides.length;
  useEffect(() => {
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000);
  }, []);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="container">
        <section className="slider">
          {/* <i
            class="left-arrow fa-solid fa-chevron-left"
            onClick={prevSlide}
          ></i>
          <i
            class="rigt-arrow fa-solid fa-chevron-right"
            onClick={nextSlide}
          ></i> */}
          {SliderData.map((slide, i) => {
            return (
              <div className={i === current ? "slide active" : "slide"} key={i}>
                {i === current && (
                  <img
                    key={i}
                    src={slide.image}
                    className="slider-image"
                    alt="ramada sakarya"
                  />
                )}
              </div>
            );
          })}
          <img className="circular-logo" height="200px" src={circular} alt="" />
          <img className="logo" src={logo} alt="" />

          <div className="booking">
            <div className="date-day">
              <div className="date-login">
                <h4>Giriş</h4>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<ExampleCustomInput />}
                />
                <label htmlFor="date-picker">
                  <i
                    style={{
                      color: "#fff",
                      marginRight: "20px",
                      fontSize: "1.5rem",
                    }}
                    class="fa-solid fa-calendar-days"
                  ></i>
                </label>
              </div>
              <div className="date-left">
                <h4>Çıkış</h4>
                <DatePicker
                  selected={leftDate}
                  onChange={(date) => setLeftDate(date)}
                  customInput={<ExampleCustomInput2 />}
                  id="date-picker-left"
                  name="left-date"
                />
                <label htmlFor="date-picker-left">
                  <i
                    style={{
                      color: "#fff",
                      marginRight: "20px",
                      fontSize: "1.5rem",
                    }}
                    class="fa-solid fa-calendar-days"
                  ></i>
                </label>
              </div>
            </div>
            <div className="date-section">
              <div className="room">
                <h4>Oda</h4>
                <div className="room-settings">
                  <button onClick={() => setRoom(room === 0 ? room : room - 1)}>
                    -
                  </button>
                  <span>{room}</span>
                  <button onClick={() => setRoom(room + 1)}>+</button>
                </div>
              </div>
              <div className="adult">
                <h4>Yetişkin</h4>
                <div className="adult-settings">
                  <button
                    onClick={() => setAdult(adult === 0 ? adult : adult - 1)}
                  >
                    -
                  </button>
                  <span>{adult}</span>
                  <button onClick={() => setAdult(adult + 1)}>+</button>
                </div>
              </div>
              <div className="child">
                <h4>Çocuk</h4>
                <div className="child-settings">
                  <button
                    onClick={() => setChild(child === 0 ? child : child - 1)}
                  >
                    -
                  </button>
                  <span>{child}</span>
                  <button onClick={() => setChild(child + 1)}>+</button>
                </div>
              </div>
            </div>
            <a
              href={`https://www.wyndhamhotels.com/tr-tr/ramada/sakarya-turkey/ramada-sakarya/rooms-rates?brand_id=RA&checkInDate=${
                startDate.getMonth() + 1
              }%2F${startDate.getUTCDate()}%2F${startDate.getFullYear()}&useWRPoints=false&childAge=0&brandCode=BH%2CDI%2CRA%2CBU%2CHJ%2CKG%2CMT%2CSE%2CTL%2CWG%2CWY%2CWT%2CWP%2CVO%2CDX%2CTM%2CCE%2CAA&checkOutDate=${
                leftDate.getMonth() + 1
              }%2F${leftDate.getUTCDate()}%2F${leftDate.getFullYear()}&rooms=${
                room == 0 ? "" : room
              }&adults=${adult === 0 ? "" : adult}&children=${
                child === 0 ? "" : child
              }`}
            >
              <div className="submit">Rezerve</div>
            </a>
          </div>
        </section>

        <div className="booking-section-small">
          <h2 onClick={() => setBooking(!booking)}>Rezervasyon Yap</h2>

          <div
            className={
              booking
                ? "booking-section-small-booking active"
                : "booking-section-small-booking"
            }
          >
            <div className="date-day">
              <div className="date-login">
                <h4>Giriş</h4>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<ExampleCustomInput />}
                />
                <label htmlFor="date-picker">
                  <i
                    style={{
                      marginRight: "20px",
                      fontSize: "1.5rem",
                    }}
                    class="fa-solid fa-calendar-days"
                  ></i>
                </label>
              </div>
              <div className="date-left">
                <h4>Çıkış</h4>
                <DatePicker
                  selected={leftDate}
                  onChange={(date) => setLeftDate(date)}
                  customInput={<ExampleCustomInput2 />}
                  id="date-picker-left"
                  name="left-date"
                />
                <label htmlFor="date-picker-left">
                  <i
                    style={{
                      marginRight: "20px",
                      fontSize: "1.5rem",
                    }}
                    class="fa-solid fa-calendar-days"
                  ></i>
                </label>
              </div>
            </div>
            <div className="date-section">
              <div className="room">
                <h4>Oda</h4>
                <div className="room-settings">
                  <button onClick={() => setRoom(room === 0 ? room : room - 1)}>
                    -
                  </button>
                  <span>{room}</span>
                  <button onClick={() => setRoom(room + 1)}>+</button>
                </div>
              </div>
              <div className="adult">
                <h4>Yetişkin</h4>
                <div className="adult-settings">
                  <button
                    onClick={() => setAdult(adult === 0 ? adult : adult - 1)}
                  >
                    -
                  </button>
                  <span>{adult}</span>
                  <button onClick={() => setAdult(adult + 1)}>+</button>
                </div>
              </div>
              <div className="child">
                <h4>Çocuk</h4>
                <div className="child-settings">
                  <button
                    onClick={() => setChild(child === 0 ? child : child - 1)}
                  >
                    -
                  </button>
                  <span>{child}</span>
                  <button onClick={() => setChild(child + 1)}>+</button>
                </div>
              </div>
            </div>
            <a
              href={`https://www.wyndhamhotels.com/tr-tr/ramada/sakarya-turkey/ramada-sakarya/rooms-rates?brand_id=RA&checkInDate=${
                startDate.getMonth() + 1
              }%2F${startDate.getUTCDate()}%2F${startDate.getFullYear()}&useWRPoints=false&childAge=0&brandCode=BH%2CDI%2CRA%2CBU%2CHJ%2CKG%2CMT%2CSE%2CTL%2CWG%2CWY%2CWT%2CWP%2CVO%2CDX%2CTM%2CCE%2CAA&checkOutDate=${
                leftDate.getMonth() + 1
              }%2F${leftDate.getUTCDate()}%2F${leftDate.getFullYear()}&rooms=${
                room == 0 ? "" : room
              }&adults=${adult === 0 ? "" : adult}&children=${
                child === 0 ? "" : child
              }`}
            >
              <div className="submit">Rezervasyon</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
