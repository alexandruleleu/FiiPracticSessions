import React from "react";
import { render } from "react-dom";

/*
 *import react-redux Provider = binding between store API and App Component
 *redux Provider = make the store available to the connect() calls
 */
import { Provider } from "react-redux";
import store from "./main/store";

//root component
import App from "./main/app";

//styles
import "./assets/less/index.css";

const target = document.getElementById("root");

render(<App />, target);
