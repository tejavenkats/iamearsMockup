import React, { useState } from "react";

export default function Event(props) {
  const [clicked, setClicked] = useState(false);

  let btnClass = clicked ? "event-box event-box-click-odd" : "event-box ";
  return (
    <div
      className={btnClass}
      onClick={() => {
        setClicked(!clicked);
        props.passId(props.no);
      }}
    >
      <p>Event Type {props.no}</p>
    </div>
  );
}
