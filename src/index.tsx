// import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./components/sizingbreakpoints.scss";
import "./demo/css/backgroundHelper.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
