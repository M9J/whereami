import React from "react";

import './LayoutStatus.css';

export default function LayoutStatus(props) {
  const message = props.message;
  return <div className="layout-status">&gt; {message && message}</div>;
}
