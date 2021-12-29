import React from "react";
import Intro from "./Content/Intro";
import Portfolio from "./Content/Portfolio";
import AboutMe from "./Content/AboutMe";
import Contact from "./Content/Contact";
export default function Content(params) {
  return (
    <div className='content-container'>
      <div>
        <Intro />
        <div id='portfolio'>
          <Portfolio />
        </div>
        <div id='about-me'>
          <AboutMe />
        </div>
        <div id='contact'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
