import React from "react";
import ReactEmoji from "react-emoji";
import Moment from "react-moment";

import "./Message.css";

export default function Message({ message: { text, user }, name }) {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim();
  const createdDate = new Date();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <div className="message">
      {isSentByCurrentUser ? (
        <div className="message__container toEnd">
          <Moment fromNow>{createdDate}</Moment>
          <p className="message__containerName extra-padRight">{trimmedName}</p>
          <div className="message__containerMessageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      ) : (
        <div className="message__container">
          <Moment fromNow>{createdDate}</Moment>
          <div className="message__containerMessageBox backgroundLite">
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="message__containerName extra-padLeft">{user}</p>
        </div>
      )}
    </div>
  );
}
