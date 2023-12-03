import React from "react";
import "./LayoutHeader.css";

export default function LayoutHeader(props) {
  return (
    <div className="layout-header">
      <div className="layout-header-text">{props.headerText}</div>
      <div className="layout-header-refresh-button">
        <button onClick={props.refreshAction}>
          <img
            src={process.env.PUBLIC_URL + "/icons/refresh.svg"}
            alt="refresh icon"
          />
        </button>
      </div>
    </div>
  );
}
