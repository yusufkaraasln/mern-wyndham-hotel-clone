import React, { useEffect, useState } from "react";
import { Spa_Wellness } from "../../images/SpaWellness";
import "./wellness.scss";
import logo from "../../images/logo.svg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function SpaWellness({ slides }) {
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
    <div className="spa-wellness">
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
          {Spa_Wellness.map((slide, i) => {
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
          <main>
          <div className="spa-wellness-details">
                  <span>Spa & Wellness</span>
        <div className="spa-wellness-details-container">
          <p>
            Covid-19 sebebiyle Sağlık bakanlığının ilgili genelgesi
            doğrultusunda SPA alanlarının kullanımı için rezervasyon yapılması
            zorunludur. "Misafirlerimiz gelmeden önce SPA Resepsiyon'dan
            rezervasyon yaptırmalarını rica ederiz." Çalışma saatlerimiz 09:00 -
            22:00 arasındadır. Alanlarımız her kullanım sonrası ve düzenli
            olarak her iki saatte bir dezenfekte edilmektedir. Alanlarımız
            sosyal mesafe kuralına uygun olarak konumlandırılmış ve tüm
            misafirlerimizi bilgilendirmek adına kurallar ve önlemler
            uygulanmıştır.
          </p>
          <ul>
            <li>
              Alanlarında uzman, tecrübeli, samimi, sempatik ekibimiz sizleri
              yaşamın tüm stresli anlarından uzaklaştıracak, kişiye özel
              bakımlarla, hem bedeninizi hem de ruhunuzu dinlendirecek.
              Uzakdoğu' nun egzotik SPA keyfini Ramada By Wyndham Sakarya Hotel
              farkıyla yaşayın.
            </li>
            <li>
              Kişisel bakım ve masaj odalarımızda, anti-stresten selülite ,
              lokal ağrılardan, cilt sorunlarına kadar her türlü sorununuzu size
              özel hazırlanan programlarımız ile çözecek, sağlık ve güzellik
              hizmeti sunuyoruz.
            </li>
            <li>
              Ramada By Wyndham Sakarya Otel bulunduğu bölgenin ihtiyaçlarına
              karşılık gelecek konsepti ile tüm ıslak alanlarda bayan-erkek ayrı
              olmak üzere siz kıymetli misafirlerimizin hizmetine
              sunulmuştur.SPA alanımız 12 yaş ve üzeri tüm misafirlerine aynı
              standartlarda hizmet vermektedir.
            </li>
            <li>
              Ramada By Wyndham Sakarya Hotel kalitesini yaşamak için sizleride
              bekleriz.
            </li>
          </ul>
        </div>
        
      </div>
      <Footer logo={logo}></Footer>
          </main>
      
    </div>
  );
}

export default SpaWellness;
