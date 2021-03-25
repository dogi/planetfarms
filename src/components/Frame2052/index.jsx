import React from "react";
import Frame19882 from "../Frame19882";
import "./Frame2052.css";

function Frame2052(props) {
  const { frame19882Props } = props;

  return (
    <div className="frame-2052">
      <Frame19882 className="frame-1988-6">{frame19882Props.children}</Frame19882>
    </div>
  );
}

export default Frame2052;