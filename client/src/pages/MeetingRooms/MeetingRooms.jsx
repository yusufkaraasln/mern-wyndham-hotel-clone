import React from "react";
import { useState } from "react";
import { Meeting } from "../../images/Meeting";
import "./meeting.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function MeetingRooms({ slides }) {
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
    <div className="meeting-room">
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
          {Meeting.map((slide, i) => {
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
      <div className="meeting-room-content">
        <div className="meeting-room-content-header">
          <span>Toplantı Salonları</span>
        </div>
        <div className="meeting-room-content-desc">
          <p>
            Ramada By Wyndham Sakarya Hotel, organizasyonlarınız ve
            toplantılarınızda size kendinizi rahat ve ayrıcalıklı
            hissedebileceğiniz üst düzey bir hizmet sunar. Uluslararası Ramada
            standartlarına sahip topantı odaları ve yüksek teknoloji ile
            donatılmış Business Centre’ı ile toplantılarınızı en verimli şekilde
            geçirebilirsiniz. 920 m2 alan üzerinde konumlanan toplantı
            merkezimiz, üst düzey teknoloji ile donatılmıştır.
          </p>
        </div>
        <div className="meeting-room-content-features">
          <div className="meeting-room-content-features-item">
            <div className="meeting-room-content-features-item-title">
              <span>Adapazarı Toplantı Salonu</span>
              <p>
                15 Kişilik Kapasitesi ile mini toplantılar için, tasarlanmıştır.
                Toplantı salonumuz lobi katında bulunmaktadır. İhtiyaç
                duyulabilecek tüm ses-ışık ve görüntü ekipmanlarıyla sizlere
                şirket toplantılarınız, seminer ve konferans organizasyonlarınız
                için profesyonel çözümler sunmaktadır.
              </p>
            </div>
            <div className="meeting-room-content-features-item-photo">
              <img src={Meeting[1].image} alt="ramada sakarya" />
            </div>
          </div>
          <div className="meeting-room-content-features-item">
            <div className="meeting-room-content-features-item-title">
              <span>Taraklı Toplantı Salonu</span>
              <p>
                25 Kişilik Kapasitesi ile değerli misafirlerimize toplantı,
                seminer ve eğitim salonu olarak tasarlanmıştır. İhtiyaç
                duyulabilecek tüm ses-ışık ve görüntü ekipmanlarıyla sizlere
                şirket toplantılarınız, seminer ve konferans organizasyonlarınız
                için profesyonel çözümler sunmaktadır.
              </p>
            </div>
            <div className="meeting-room-content-features-item-photo">
              <img src={Meeting[2].image} alt="ramada sakarya" />
            </div>
          </div>
          <div className="meeting-room-content-features-item">
            <div className="meeting-room-content-features-item-title">
              <span>Sapanca Toplantı Salonu</span>
              <p>
                35 Kişilik Kapasitesi ile değerli misafirlerimize toplantı,
                seminer ve eğitim salonu olarak tasarlanmıştır. İhtiyaç
                duyulabilecek tüm ses-ışık ve görüntü ekipmanlarıyla sizlere
                şirket toplantılarınız, seminer ve konferans organizasyonlarınız
                için profesyonel çözümler sunmaktadır.
              </p>
            </div>
            <div className="meeting-room-content-features-item-photo">
              <img src={Meeting[3].image} alt="ramada sakarya" />
            </div>
          </div>
          <div className="meeting-room-content-features-item">
            <div className="meeting-room-content-features-item-title">
              <span>Sakarya Balo Salonu</span>
              <p>
                500 Kişilik Kapasitesi ile değerli misafirlerimize düğün, nişan,
                kına, balo, toplantı, konferans, seminer ve eğitim salonu olarak
                tasarlanmıştır. Profesyonel ses-ışık ve görüntü ekipmanlarıyla
                sizlere profesyonel çözümler sunmaktadır. Ayrıca salonumuz 2
                bölüme ses geçirmez paravan ile ayrılabilmektedir. 150 kişilik
                toplantı, seminer ve eğitim salonu olarak da kullanılabilir.
              </p>
            </div>
            <div className="meeting-room-content-features-item-photo">
              <img src={Meeting[0].image} alt="ramada sakarya" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MeetingRooms;
