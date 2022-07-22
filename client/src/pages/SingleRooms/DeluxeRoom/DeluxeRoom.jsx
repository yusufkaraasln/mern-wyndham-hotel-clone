import React, { useEffect, useState } from "react";
import { Superior } from "../../../images/Superior";
import "../SuperiorRoom/superior.scss";
import logo from "../../../images/logo.svg"
import Navbar from "../../../components/Navbar/Navbar";
function DeluxeRoom({ slides }) {
  const [current, setCurrent] = useState(0);

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
  return (
    <div className="superior">
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
          {Superior.map((slide, i) => {
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
        </section>
      </div>
      <div className="content">
        <div className="content-title">
          <span>Deluxe Oda</span>
        </div>
        <div className="content-features">
          <div className="content-features-icons">
            <ul>
              <li>
                <i class="fa-solid fa-bed"></i>
                <p>Büyük Yatak</p>
              </li>
              <li>
                <i class="fa-solid fa-plus"></i>
                <p>Ek Yatak</p>
              </li>
              <li>
                <i class="fa-solid fa-bed"></i>
                <p>Tekli Yatak</p>
              </li>
              <li>
                <i class="fa-solid fa-vault"></i>
                <p>Elektronik Kasa</p>
                <p></p>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <p>Elektronik Kasa</p>
              </li>
              <li>
                <i class="fa-solid fa-tv"></i>
                <p>Led TV</p>
              </li>
              <li>
                <i class="fa-solid fa-shower"></i>
                <p>Duş</p>
              </li>
              <li>
                <i class="fa-solid fa-mug-hot"></i>
                <p>Çay,Kahve Set-up</p>
              </li>
            </ul>
          </div>
          <div className="content-features-booking">
            <div className="content-features-booking-book">
              <a href="https://www.wyndhamhotels.com/ramada/sakarya-turkey/ramada-sakarya/rooms-rates">
                REZERVASYONU YAP
              </a>
            </div>

            <div className="content-features-booking-contact">
              <span>Veya bize ulaşın</span>
              <a href="tel://02646662244">
                <i class="fa fa-phone"></i>
                0264 666 22 44
              </a>
            </div>
          </div>
          <div className="content-features-details">
            <div className="content-features-details-description">
              <ul>
                <li>Odadan ayarlanabilen klima sistemi</li>
                <li>Oda içi elektronik kasa</li>
                <li>Kablosuz internet hizmeti</li>
                <li>Çay,Kahve Set-up</li>
                <li>Saç kurutma makinesi</li>
                <li>Led Televizyon</li>
                <li>Direkt hatlı Telefon</li>
                <li>Minibar</li>
                <li>Elektronik kapı kilit sistemi</li>
                <li>Duman dedektörü ve sprinkler</li>
                <li>Ütü ve Ütü masası (istek üzerine)</li>
              </ul>
            </div>

            <div className="content-features-details-policy">
              <div className="content-features-details-policy-enter-exit">
                <i className="fa fa-clock"></i>
                <div className="content-features-details-policy-enter-exit-details">
                  <span>Giriş ve Çıkış</span>
                  <ul>
                    <li>Giriş saati: 14.00</li>
                    <li>Çıkış saati: 14.00</li>
                    <li>
                      18 yaş altı misafirlerimiz ebeveynleri olmadan otelimize
                      kabul edilmemektedir.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-features-details-policy-cancel">
                <i className="fa fa-circle-info"></i>
                <div className="content-features-details-policy-cancel-details">
                  <span>İptal</span>
                  <ul>
                    <li>Giriş saati: 14.00</li>
                    <li>Çıkış saati: 14.00</li>
                    <li>
                      18 yaş altı misafirlerimiz ebeveynleri olmadan otelimize
                      kabul edilmemektedir.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-features-details-policy-smoke">
                <i class="fa-solid fa-smoking"></i>
                <div className="content-features-details-policy-cancel-details">
                  <span>Sigara</span>
                  <ul>
                    <li>
                      Otelimizin kapalı ortak alanlarında sigara içmek
                      kesinlikle yasaktır.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-features-details-policy-paying">
                <i class="fa-solid fa-credit-card"></i>
                <div className="content-features-details-policy-cancel-details">
                  <span>Ödememeler</span>
                  <ul>
                    <li>
                      Ücreti ödenmeyen rezervasyonlar saat 18:00 kadar
                      geçerlidir.
                    </li>

                    <li style={{ margin: "10px 0" }}>
                      <strong>Kabul edilen Ödeme Yöntemleri</strong>
                    </li>
                    <ul style={{ marginLeft: "20px" }}>
                      <li>Nakit (TL, Euro, USD)</li>
                      <li>Master Card</li>
                      <li>Visa Card</li>
                      <li>American Express</li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="content-features-details-policy-disabled-guest">
                <i class="fa-solid fa-wheelchair"></i>
                <div className="content-features-details-policy-cancel-details">
                  <span>İptal</span>
                  <ul>
                    <li>
                      Otelimize engelli misafirlerimizin rehber hayvanları
                      dışında, evcil hayvana izin verilmemektedir.
                    </li>
                    <li>
                      Otelimizde 1 adet engelli odası ve genel alanlarda 1 adet
                      engelli wc’si bulunmaktadır
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    
    </div>
  );
}

export default DeluxeRoom;
