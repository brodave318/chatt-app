import React from "react";

import "./TextContainer.css";

export default function TextContainer({ users }) {
  return (
    <div className="textContainer">
      <h2 className="textContainer__subheading">Real-time</h2>

      <h1 className="textContainer__text">chat-app!!</h1>

      <h4>Current roomates:</h4>
      {users ? (
        <div>
          {users.map(({ name }) => (
            <div key={name} className="users">
              {name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
