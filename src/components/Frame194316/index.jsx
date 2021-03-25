import React from "react";
import { Link } from "react-router-dom";
import Frame1945 from "../Frame1945";
import Frame1953 from "../Frame1953";
import Frame1947 from "../Frame1947";
import Frame1948 from "../Frame1948";
import Frame2303 from "../Frame2303";
import Group1942 from "../Group1942";
import Frame28912 from "../Frame28912";
import "./Frame194316.css";

function Frame194316(props) {
  const {
    text611,
    text612,
    text613,
    text629,
    union,
    frame1945Props,
    frame1953Props,
    frame1947Props,
    frame1948Props,
    frame2303Props,
    group1942Props,
    frame28912Props,
  } = props;

  return (
    <div className="frame-194317">
      <Frame1945 frame2891Props={frame1945Props.frame2891Props} frameProps={frame1945Props.frameProps} />
      <div className="frame-194416">
        <Link to="/3-community-page-news">
          <div className="frame-284714">
            <Frame1953 text37={frame1953Props.text37} usermanagementProps={frame1953Props.usermanagementProps} />
          </div>
        </Link>
        <Link to="/5-1-all-groups">
          <div className="frame-197415">
            <div className="text-61">{text611}</div>
          </div>
        </Link>
        <Link to="/81community-members">
          <div className="frame-197510">
            <div className="text-61">{text612}</div>
          </div>
        </Link>
        <Link to="/9-1-all-enterprises">
          <div className="frame-197610">
            <div className="text-61">{text613}</div>
          </div>
        </Link>
        <div className="frame-197714"></div>
        <div className="frame-197814"></div>
      </div>
      <Frame1947 text41={frame1947Props.text41} bookProps={frame1947Props.bookProps} />
      <Frame1948 graduationCap={frame1948Props.graduationCap} text42={frame1948Props.text42} />
      <div className="rectangle-85922"></div>
      <Frame2303 vector={frame2303Props.vector} vector2={frame2303Props.vector2} className="frame-230317" />
      <div className="group-19439">
        <div className="frame-27918">
          <div className="rectangle-859-18"></div>
          <Group1942 {...group1942Props} />
          <Link to="/4-2-calendar-with-events">
            <div className="frame-28523 border-1px-caribbean-green">
              <div className="text-629 valign-text-middle">{text629}</div>
            </div>
          </Link>
        </div>
        <img className="union9" src={union} />
        <Frame28912
          text57={frame28912Props.text57}
          chevronsLeftProps={frame28912Props.chevronsLeftProps}
          chevronsLeft2Props={frame28912Props.chevronsLeft2Props}
        />
      </div>
    </div>
  );
}

export default Frame194316;