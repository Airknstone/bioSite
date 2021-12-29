import React from "react";
import SideNav from "../components/SideNav";
import Content from "./Content";
export default function Container(params) {
  return (
    <div className='container'>
      <SideNav />
      <Content />
    </div>
  );
}
