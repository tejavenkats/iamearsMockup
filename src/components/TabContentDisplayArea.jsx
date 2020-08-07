import React from "react";

export default function TabContentDisplayArea(props) {
  return (
    <div className="tab-content">
      <p>{props.content}</p>
    </div>
  );
}
