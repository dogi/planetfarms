import React from "react";
import "./Frame414.css";

function Frame414(props) {
  const { children } = props;

  return (
    <a href="javascript:history.back()">
      <div className="frame-420 border-0-5px-quarter-spanish-white">
        <div className="default-i905516608 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
          {children}
        </div>
      </div>
    </a>
  );
}

export default Frame414;