import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import "../PanelContact/details-contact.scss"

function DetailsMeeting() {
  
    const location = useLocation();

    const [meetingDetail, setMeetingDetail] = useState([]);
    const path = location.pathname.split("/")[3];
  
    useEffect(() => {
      const getMeetingDetail = async () => {
        const res = await axios.get(`/meeting/${path}`);
        setMeetingDetail(res.data);
        console.log(meetingDetail);
      };
      getMeetingDetail();
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
              <span>{meetingDetail.name}</span>
            </div>
          </div>




          <div className="contact-details-features-item">
            <div className="contact-details-features-item-left">
              <span>Email</span>
            </div>
            <div className="contact-details-features-item-right">
              <span>{meetingDetail.email}</span>
            </div>
          </div>
          <div className="contact-details-features-item">
            <div className="contact-details-features-item-left">
              <span>Telefon</span>
            </div>
            <div className="contact-details-features-item-right">
              <span>{meetingDetail.phone}</span>
            </div>
          </div>
          <div className="contact-details-features-item">
            <div className="contact-details-features-item-left">
              <span>Mesaj</span>
            </div>
            <div className="contact-details-features-item-right message">
              <span>{meetingDetail.message}</span>
            </div>
          </div>
           





          
        </div>
      </div>
    </div>
  )
}

export default DetailsMeeting