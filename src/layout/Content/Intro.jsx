import React from "react";

export default function Intro(props) {
  return (
    <div
      className={props.power === true ? "content powerUp" : "content"}
      id='intro'>
      <h1>Heading inTro</h1>
      <h1>Hi,</h1>
      <h2>My name is Allan</h2>
      <h3>And I am A web Developer</h3>
    </div>
  );
}
