import React, { useState } from "react";
import Tab from "./Tab";

export default function TabHeaderDisplayArea(props) {
  let tabStyles = {
    backgroundColor: "rgb(216, 206, 193)",
    marginTop: "0.5rem",
    height: "1.5rem",
    width: "8rem",
    padding: "0.3rem",
    textAlign: "center",
    fontSize: "1.2rem;",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };
  let classnameToPass = "tab-style-clicked";
  let styles = {
    display: "grid",
    gridTemplateColumns: "repeat(10,9rem)",
    overflow: "hidden",
  };

  if (props.noOfTabs.length > 5) {
    styles.gridTemplateColumns = "repeat(10,7rem)";
    tabStyles.width = "6rem";
    classnameToPass = "tab-style-clicked-gt5";
  }
  if (props.noOfTabs.length > 7) {
    styles.gridTemplateColumns = "repeat(10,5rem)";
    tabStyles.width = "4rem";
    classnameToPass = "tab-style-clicked-gt7";
  }

  function handleIdFromTab(id) {
    props.receiveIdfromTab(id);
  }

  function handleDelete(id) {
    props.onDelete(id);
  }

  function handleNextIndex(id) {
    props.showNextTab(id);
  }
  return (
    <div style={styles}>
      {props.noOfTabs.map((tab, index) => {
        return (
          <Tab
            index={tab}
            tabStyle={tabStyles}
            activeClass={classnameToPass}
            idFromTab={handleIdFromTab}
            delete={handleDelete}
            nextTab={props.noOfTabs[index + 1]}
            nextIndex={handleNextIndex}
          />
        );
      })}
    </div>
  );
}
