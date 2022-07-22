import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./details-contact.scss";
function DetailsContact() {
  const location = useLocation();

  const [contactDetail, setContactDetail] = useState([]);
  const path = location.pathname.split("/")[3];

  useEffect(() => {
    const getContactDetail = async () => {
      const res = await axios.get(`/contact/${path}`);
      setContactDetail(res.data);
      console.log(contactDetail);
    };
    getContactDetail();
  }, [path]);

  return (
    <div>
      <div className="contact-details">
        <div className="contact-details-features">
          <div className="contact-details-features-item">
            <div className="contact-details-features-item-left">
              <span>Ad</span>
            </div>
            <div className="contact-details-features-item-right">
              <span>{contactDetail.name}</span>
            </div>
          </div>




          <div className="contact-details-features-item">
            <div className="contact-details-features-item-left">
              <span>Email</span>
            </div>
            <div className="contact-details-features-item-right">
              <span>{contactDetail.email}</span>
            </div>
          </div>
          <div className="contact-details-features-item">
            <div className="contact-details-features-item-left">
              <span>Telefon</span>
            </div>
            <div className="contact-details-features-item-right">
              <span>{contactDetail.phone}</span>
            </div>
          </div>
          <div className="contact-details-features-item">
            <div className="contact-details-features-item-left">
              <span>Mesaj</span>
            </div>
            <div className="contact-details-features-item-right message">
              <span>{contactDetail.message}</span>
            </div>
          </div>
           





          
        </div>
      </div>
    </div>
  );
}

export default DetailsContact;
