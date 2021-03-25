import React from "react";
import { Link } from "react-router-dom";
import Emailoutline from "../Emailoutline";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame19545.css";

function Frame19545(props) {
  const { ragrariansI1169649, frame1951, text123, emailoutlineProps, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-19545">
      <div className="ragrarians-i1169649 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI1169649}</div>
      <div className="frame-19735">
        <Emailoutline layer22Props={emailoutlineProps.layer22Props} />
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-19515">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-14" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-28486">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-123 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text123}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame19545;