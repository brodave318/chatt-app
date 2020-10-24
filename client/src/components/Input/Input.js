import React from "react";

import "./Input.css";

export default function Input({ message, sendMessage, setMessage }) {
  return (
    <div className="input">
      <form className="input__form">
        <input
          className="input__formInput"
          type="text"
          placeholder="...got message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <button className="input__formButton" onClick={(e) => sendMessage(e)}>
          Send
        </button>
      </form>
    </div>
  );
}
