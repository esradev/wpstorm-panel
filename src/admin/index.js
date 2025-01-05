import { HashRouter } from "react-router-dom";
import { createRoot } from "@wordpress/element";

import App from "./app";
import "../index.css";

const container = document.getElementById("wpstorm-panel-admin-dashboard");

if (container) {
  const root = createRoot(container);
  root.render(
    <HashRouter>
      <App />
    </HashRouter>
  );
}
