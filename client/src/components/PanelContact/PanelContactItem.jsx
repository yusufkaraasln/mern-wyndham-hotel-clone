import React from 'react'
import { Routes } from 'react-router-dom';
import "./panel-contact-item.scss";

function PanelContactItem({ contact }) {
  return (
    <div className="contact-item-single">
    
        <span>Ad: {contact.name}</span>
        <span>Tel: {contact.phone}</span>
        <span>Email: {contact.email}</span>


       
        
    </div>

  )
}

export default PanelContactItem