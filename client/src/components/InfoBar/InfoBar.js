import React from "react";

import "./InfoBar.css";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/chatappLogo4.png";

export default function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="infoBar__leftContainer">
        <img src={onlineIcon} alt="online" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="infoBar__rightContainer">
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
}
