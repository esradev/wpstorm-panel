// index for react app
import React from "react";
import { createRoot } from "@wordpress/element";

import App from "./app";
import "../index.css";

const container = document.getElementById("wpstorm-panel-admin-dashboard");

if (container) {
  createRoot(container).render(<App />);
}
