import React, { useState } from "react";
import SideNav from "../components/SideNav";
import Content from "./Content";
import { motion } from 'framer-motion';
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
      <motion.div
        initial={ { display: 'none' } }
        animate={ { display: 'block' } }
        transition={{delay:2, ease: 'easeOut'}}
        id='cursor'
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}></motion.div>
      <SideNav power={powerLevel} togglePowerLevel={togglePowerLevel} />
      <Content power={powerLevel} />
    </div>
  );
}
