import React from "react";
import { motion } from "framer-motion";

export default function SideNavComponents(props) {
  return (
    <div
      className={
        props.power === true
          ? "nav-component-container powerUp"
          : "nav-component-container"
      }>
      <a id='nav-link' href={props.route}>
        <div id='nav-icon'>{props.props}</div>
        <div id='nav-title'>{props.title}</div>
        <motion.div
          animate={{ x: -30 }}
          transition={{ duration: 3 }}
          id='line-bottom'></motion.div>
      </a>
    </div>
  );
}
