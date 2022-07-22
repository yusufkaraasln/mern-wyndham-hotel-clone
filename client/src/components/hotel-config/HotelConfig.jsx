import React, { useEffect, useState } from "react";
import "./hotelConfig.scss";
import circular_logo from "../../images/circular.png";
import { motion } from "framer-motion";
import HorizontalScroll from "react-scroll-horizontal";
function HotelConfig(props) {
  return (
    <div className="hotel-config">
      <div className="details">
        <div className="details-logo">
          <img
            height="115px"
            style={{ paddingBottom: "30px", marginRight: "20px" }}
            src={circular_logo}
            alt=""
          />
          <img width="400px" src={props.logo} alt="" />
        </div>

        <div className="details-content">
          <p>
            Dünyanın en yaygın uluslararası otel markası olan Wyndham Hotels &
            Group’un bir üyesi olarak, yüksek otel standartları ile tasarlanmış
            Ramada By Wyndham Sakarya Otel, sizleri ileri teknoloji, konfor ve
            estetik ile buluşturuyor.
          </p>
        </div>

        <motion.div
          className="tripadvisor-header"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <a
            target="_blank"
            href="https://www.tripadvisor.com.tr/Hotel_Review-g789443-d8773814-Reviews-Ramada_by_Wyndham_Sakarya-Adapazari_Sakarya_Province.html"
          >
            <img height="40px" src={props.trip} alt="" />
          </a>
          <p>
            <strong style={{ color: "#d11242" }}>
              Ramada by Wyndham Sakarya
            </strong>{" "}
            için 200+ yorumu okuyun !
          </p>
        </motion.div>

        <div className="tripadvisor-content">
          <p>
            Ramada by Wyndam Sakarya, 150+ gezgin tarafından "mükemmel" olarak
            değerlendirildi
          </p>
          <img height="35px" src={props.trip_lg} alt="" />
        </div>
        <div className="details-footer">
          <p>
            Lobideki sıcak bir gülümseme ile başlayan hoşgeldiniz, sizin Ramada
            By Wyndham Sakarya deneyiminizin başlangıcıdır. Kusursuz dizaynının
            özünde 60 Superior Oda, 28 Deluxe Oda, 2 Junior Suit, 2 King Suit ve
            1 Engelli Odası olmak üzere toplam 93 odası bulunmaktadır.
          </p>
        </div>
      </div>

      <div className="content">
        <div className="content-photo-large">
          <img
            src="https://www.ramadasakarya.com/img/mainfuture/kapalihavuz.jpg"
            alt=""
          />
        </div>

        <div className="content-photo-mid">
          <div className="content-photo-mid-items">
            <img
              src="https://www.ramadasakarya.com/img/mainfuture/geniskonforluoda.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="content-photo-small">
          <div className="content-photo-small-item-1">
            <img
              src="https://www.ramadasakarya.com/img/mainfuture/hamam.jpg"
              alt=""
            />
            <div className="hamam">
            </div>
          </div>

          <div className="content-photo-small-item-2">
            <img
              src="https://www.ramadasakarya.com/img/mainfuture/sporsalonu.jpg"
              alt=""
            />
            <div className="spor-salonu">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelConfig;
