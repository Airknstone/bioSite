import React, { useState } from "react";
import SideNav from "../components/SideNav";
import Content from "./Content";
export default function Container(params) {
  const [powerLevel, setPowerLevel] = useState(false);
  const togglePowerLevel = () => {
    setPowerLevel(!powerLevel);
  };
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  return (
    <div className='container'>
      <div
        id='cursor'
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}></div>
      <SideNav power={powerLevel} togglePowerLevel={togglePowerLevel} />
      <Content power={powerLevel} />
    </div>
  );
}
