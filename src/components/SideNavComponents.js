import React from "react";

export default function SideNavComponents(props) {
  return (
    <div className='nav-component-container'>
      <a id='nav-link' href={props.route}>
        <div id='nav-icon'>{props.props}</div>
        <div id='nav-title'>{props.title}</div>
        <div id='line-bottom'></div>
      </a>
    </div>
  );
}
