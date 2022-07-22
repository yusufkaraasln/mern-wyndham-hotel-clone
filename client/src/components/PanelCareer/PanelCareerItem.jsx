import React from 'react'
import "./panel-contact-item.scss";

function PanelCareerItem({ career }) {
  return (
    <div className="contact-item-single">
    
        <span>Ad: {career.name}</span>
        <span>Email: {career.email}</span>
        <span>Pozisyon: {career.pozition}</span>
        <span>Maaş: {career.price}</span>


       
        
    </div>

  )
}

export default PanelCareerItem