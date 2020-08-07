import React from "react";
import Event from "./Event";
export default function Eventtypelist(props) {
  function handlePassId(id) {
    props.getIdtoBody(id);
  }

  function handleDelete(id) {
    props.getDeleteId(id);
  }

  return (
    <div>
      <h2>Events Viewer</h2>
      <ul className="body-event-list">
        <li>
          <Event no="1" passId={handlePassId} />
        </li>
        <li>
          <Event no="2" passId={handlePassId} />
        </li>
        <li>
          <Event no="3" passId={handlePassId} />
        </li>
        <li>
          <Event no="4" passId={handlePassId} />
        </li>
        <li>
          <Event no="5" passId={handlePassId} />
        </li>
        <li>
          <Event no="6" passId={handlePassId} />
        </li>
        <li>
          <Event no="7" passId={handlePassId} />
        </li>
        <li>
          <Event no="8" passId={handlePassId} />
        </li>
        <li>
          <Event no="9" passId={handlePassId} />
        </li>
        <li>
          <Event no="10" passId={handlePassId} />
        </li>
      </ul>
    </div>
  );
}
