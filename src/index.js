import React from "react";
import ReactDOM, { render } from "react-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
