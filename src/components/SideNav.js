import React, { useRef, useEffect } from "react";
import SvgComponent from "./Logo";
import {
  FaHome,
  FaCode,
  FaComments,
  FaJournalWhills,
  FaGitAlt,
} from "react-icons/fa";
import SideNavComponents from "./SideNavComponents";
import gsap from "gsap";
export default function SideNav(props) {
  //const boxRef = useRef();

  // useEffect(() => {
  //   gsap.to(boxRef.current, { rotation: "+=360", delay: 3 });
  // });

  return (
    <>
      <div className='side-nav-container'>
        <div
          id='logo'
          onMouseEnter={props.togglePowerLevel}
          onMouseLeave={props.togglePowerLevel}>
          <SvgComponent />{" "}
        </div>

        <div className='side-nav-content'>
          <SideNavComponents
            props={<FaHome />}
            title='Home'
            route='#top'
            power={props.power}
          />
          <SideNavComponents
            props={<FaCode />}
            title='Portfolio'
            route='#portfolio'
            power={props.power}
          />
          <SideNavComponents
            props={<FaJournalWhills />}
            title='About Me'
            route='#about-me'
            power={props.power}
          />
          <SideNavComponents
            props={<FaComments />}
            title='Contact'
            route='#contact'
            power={props.power}
          />{" "}
          <div id='git-icon'>
            <a href='https://github.com/Airknstone' target={"_blank"}>
              <FaGitAlt size={"20px"} /> GitHub
            </a>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
