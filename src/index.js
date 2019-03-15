import React from "react";
import { render } from "react-dom";
import App from "./main/app";

import "./assets/less/index.css";

const target = document.getElementById("root");

render(<App />, target);
