import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./panel-contact.scss";
import PanelContactItem from "./PanelContactItem";
import { Link,Routes,Route,Outlet } from "react-router-dom";
import DetailsContact from "./DetailsContact";

function PanelContact() {
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/contact");
      setContactList(res.data);
    };
    fetchPosts();
  });

  return (
    <div className="panel-contact">
      <div className="panel-contact-item">
        {contactList.map((contact) => (
          <Link to={`/panel/contact/${contact._id}`}>
            <PanelContactItem key={contact._id} contact={contact} />
          </Link>
        ))}
      </div>


     
    </div>
  );
}

export default PanelContact;
