import React, { useState } from "react";
import Eventtypelist from "./Eventtypelist";
// import Tab from "./Tab";
import TabHeaderDisplayArea from "./TabHeaderDisplayArea";
import TabContentDisplayArea from "./TabContentDisplayArea";
import ContentListItem from "./ContentListItem";

export default function Body() {
  const [idToSend, setidToSend] = useState(1);
  const [tabs, setTabs] = useState(["1"]);
  const [idFromTab, setIdFromTab] = useState(1);
  const [tabClicked, setTabClicked] = useState(false);
  const [showNextId, setShowNextId] = useState(false);

  function handlegetIdtoBody(id) {
    setidToSend(id);
    setTabs((prevVal) => {
      if (prevVal.includes(id)) {
        return [...prevVal];
      } else {
        return [...prevVal, id];
      }
    });
  }

  function handleReceiveIdFromTab(id) {
    setTabClicked(!tabClicked);
    setIdFromTab(id);
  }
  function handleOnDelete(id) {
    setShowNextId(!setShowNextId);
    setTabs((prevVal) => {
      return prevVal.filter((ID, index) => {
        return prevVal[index] !== id;
      });
    });
  }

  function handleShowNextTab(id) {
    setidToSend(id);
  }
  return (
    <div className="inner-body grid-container">
      <Eventtypelist getIdtoBody={handlegetIdtoBody} />
      <div className="grid-container-rows">
        <TabHeaderDisplayArea
          sendTabId={idToSend}
          noOfTabs={tabs}
          receiveIdfromTab={handleReceiveIdFromTab}
          onDelete={handleOnDelete}
          showNextTab={handleShowNextTab}
        />
        <TabContentDisplayArea
          content={tabs.map((tab) => {
            return (
              <ContentListItem
                idFromEventTypeList={idToSend}
                showNext={showNextId}
                idFromTab={idFromTab}
                sendTabClick={tabClicked}
              />
            );
          })}
        />
      </div>
    </div>
  );
}
