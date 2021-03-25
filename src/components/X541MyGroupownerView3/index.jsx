import React from "react";
import { Link } from "react-router-dom";
import Frame19544 from "../Frame19544";
import Frame29552 from "../Frame29552";
import Frame28012 from "../Frame28012";
import Frame3004 from "../Frame3004";
import Frame2954 from "../Frame2954";
import Backbtn2 from "../Backbtn2";
import Frame194327 from "../Frame194327";
import Frame2798 from "../Frame2798";
import Layer23 from "../Layer23";
import Frame414 from "../Frame414";
import "./X541MyGroupownerView3.css";

function X541MyGroupownerView3(props) {
  const {
    deleteGroup,
    deleteGroup2,
    text1111,
    frame19544Props,
    frame29552Props,
    frame28012Props,
    frame3004Props,
    frame2954Props,
    backbtn2Props,
    frame194327Props,
    frame2798Props,
    layer23Props,
    frame414Props,
  } = props;

  return (
    <div className="x541-my-group-owner-view2 screen ">
      <Frame19544
        ragrariansI520753={frame19544Props.ragrariansI520753}
        frame1951={frame19544Props.frame1951}
        emailoutlineProps={frame19544Props.emailoutlineProps}
        belloutlineProps={frame19544Props.belloutlineProps}
        frame2848Props={frame19544Props.frame2848Props}
      />
      <Frame29552 {...frame29552Props} />
      <Frame28012
        searchFilters={frame28012Props.searchFilters}
        frame28083Props={frame28012Props.frame28083Props}
        frame280832Props={frame28012Props.frame280832Props}
        frame28102Props={frame28012Props.frame28102Props}
      />
      <Frame3004 frame1980={frame3004Props.frame1980} frame2956={frame3004Props.frame2956} />
      <Frame2954 {...frame2954Props} />
      <Backbtn2 frame2923Props={backbtn2Props.frame2923Props} />
      <Frame194327
        frame1945Props={frame194327Props.frame1945Props}
        frame19442Props={frame194327Props.frame19442Props}
        frame1947Props={frame194327Props.frame1947Props}
        frame1948Props={frame194327Props.frame1948Props}
        frame2303Props={frame194327Props.frame2303Props}
        group1943Props={frame194327Props.group1943Props}
      />
      <Frame2798 {...frame2798Props} />
      <div className="rectangle-85712"></div>
      <div className="frame-196413">
        <div className="frame-196312">
          <div className="delete-group ibmplexsans-semi-bold-quarter-spanish-white-24px">{deleteGroup}</div>
          <a href="javascript:history.back()">
            <div className="close-outline-116">
              <Layer23 closeProps={layer23Props.closeProps} />
            </div>
          </a>
        </div>
        <div className="frame-3734">
          <Frame414>{frame414Props.children}</Frame414>
          <Link to="/541-my-group-owner-view4">
            <div className="frame-19662">
              <div className="delete-group-1 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                {deleteGroup2}
              </div>
            </div>
          </Link>
        </div>
        <p className="text-1111 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text1111}</p>
      </div>
    </div>
  );
}

export default X541MyGroupownerView3;