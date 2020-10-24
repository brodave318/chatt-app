import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join">
      <div className="join__header">
        <img
          className="join__headerLogoImg"
          src={require("../../icons/chatappLogo4.png")}
          alt="logo"
        />
        <h1 className="join__headerLogo">Chatt-App</h1>
        <h1 className="join__heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            type="text"
            className="join__headingInput"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            type="text"
            className="join__headingInput"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
