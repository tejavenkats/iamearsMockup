import React from "react";

export default function ContentListMapped(props) {
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "15rem auto",
    backgroundColor: "whitesmoke",
    width: "auto",
    height: "2rem",
    padding: "1rem 0 0 1rem",
    borderBottom: "1px solid black",
  };
  console.log(props.receiveTabClick);

  return (
    <div>
      <div style={gridContainer}>
        <p>Event type</p>
        <p>Event details and everything else go here</p>
      </div>
      <div style={gridContainer}>
        <p>Event type</p>
        <p>Event details and everything else go here</p>
      </div>
      <div style={gridContainer}>
        <p>Event type</p>
        <p>Event details and everything else go here</p>
      </div>
      <div style={gridContainer}>
        <p>Event type</p>
        <p>Event details and everything else go here</p>
      </div>
      <div style={gridContainer}>
        <p>Event type</p>
        <p>Event details and everything else go here</p>
      </div>
      <div style={gridContainer}>
        <p>Event type</p>
        <p>Event details and everything else go here</p>
      </div>
      <div style={gridContainer}>
        <p>Event type</p>
        <p>Event details and everything else go here</p>
      </div>
      <div style={gridContainer}>
        <p>Event type</p>
        <p>Event details and everything else go here</p>
      </div>
      <div style={gridContainer}>
        <p>Event type</p>
        <p>Event details and everything else go here</p>
      </div>
      <div style={gridContainer}>
        <p>Event type</p>
        <p>Event details and everything else go here</p>
      </div>
    </div>
  );

  //   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  //   let b = parseInt(props.id) - 1;
  //   //   console.log(b, typeof b);
  //   let x = JSON.parse(JSON.stringify(eventlist));

  //   let a = x[b].col1;
  //   let c = x[b].col2;
  //   arr.map((item) => {
  //     console.log(item);
  //     return (
  //       <div style={gridContainer}>
  //         <p>{a}</p>
  //         <p>{c}</p>
  //       </div>
  //     );
  //   });
  //   for (var i = 0; i < 12; i++) {
  //     return (
  //       <div style={gridContainer}>
  //         <p>{a}</p>
  //         <p>{c}</p>
  //       </div>
  //     );
}
