import React, { useState } from "react";
import SideNav from "../components/SideNav";
import Content from "./Content";
export default function Container(params) {
  const [powerLevel, setPowerLevel] = useState(false);
  const togglePowerLevel = () => {
    setPowerLevel(!powerLevel);
  };

  return (
    <div className='container'>
      <SideNav power={powerLevel} togglePowerLevel={togglePowerLevel} />
      <Content power={powerLevel} />
    </div>
  );
}
