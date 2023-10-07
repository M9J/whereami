import React from "react";
import './LayoutHeader.css';

export default function LayoutHeader(props) {
  return (
    <div className="layout-header">
      {props.headerText}
    </div>
  );
}
