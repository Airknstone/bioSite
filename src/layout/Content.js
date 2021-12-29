import React from "react";
import Intro from "./Content/Intro";
import Portfolio from "./Content/Portfolio";
import AboutMe from "./Content/AboutMe";
import Contact from "./Content/Contact";
export default function Content(props) {
  return (
    <div className='content-container'>
      <div>
        <Intro power={props.power} />
        <div id='portfolio'>
          <Portfolio power={props.power} />
        </div>
        <div id='about-me'>
          <AboutMe power={props.power} />
        </div>
        <div id='contact'>
          <Contact power={props.power} />
        </div>
      </div>
    </div>
  );
}
