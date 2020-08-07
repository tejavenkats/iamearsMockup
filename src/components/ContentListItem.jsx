import React from "react";
import ContentListMapped from "./ContentListMapped";
// import eventlist from "./eventlist";

export default function ContentListItem(props) {
  return (
    <ContentListMapped
      id1={props.idFromEventTypeList}
      id2={props.idFromTab}
      receiveShowNextId={props.showNextId}
      receiveTabClick={props.sendTabClick}
    />
  );
}
