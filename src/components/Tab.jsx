import React, { useState } from "react";

export default function Tab(props) {
  const [clicked, setClicked] = useState(false);
  function handleOnClick() {
    setClicked(!clicked);
    props.idFromTab(props.index);
  }
  function handleOnClickDelete() {
    props.delete(props.index);
    props.nextIndex(props.nextTab);
  }
  let classname;

  clicked ? (classname = props.activeClass) : (classname = "");

  return (
    <div className="grid-container-tab" onClick={handleOnClick}>
      <div style={props.tabStyle} className={classname}>
        <h4 style={{ overflow: "hidden" }}>
          <button
            type="button"
            onClick={handleOnClickDelete}
            style={{ width: "auto " }}
          >
            x
          </button>
          Event type {props.index}
        </h4>
      </div>
    </div>
  );
}
