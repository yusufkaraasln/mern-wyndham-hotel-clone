import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./panel-contact.scss";
import PanelMeetingItem from "./PanelMeetingItem";
import { Link,Routes,Route,Outlet } from "react-router-dom";
import DetailsMeeting from "./DetailsMeeting";

function PanelMeeting() {
  const [meetingList, setMeetingList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/meeting");
      setMeetingList(res.data);
    };
    fetchPosts();
  });

  return (
    <div className="panel-contact">
      <div className="panel-contact-item">
        {meetingList.map((meeting) => (
          <Link  to={`/panel/meeting/${meeting._id}`}>
            <PanelMeetingItem key={meeting._id} meeting={meeting} />
          </Link>
        ))}
      </div>


     
    </div>
  );
}

export default PanelMeeting;
