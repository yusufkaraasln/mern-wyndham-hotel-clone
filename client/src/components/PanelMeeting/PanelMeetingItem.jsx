import React from 'react'
import "./panel-contact-item.scss";

function PanelMeetingItem({ meeting }) {
  return (
    <div className="contact-item-single">
    
        <span>Ad: {meeting.name}</span>
        <span>Tel: {meeting.phone}</span>
        <span>Email: {meeting.email}</span>


       
        
    </div>

  )
}

export default PanelMeetingItem