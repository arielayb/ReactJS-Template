import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./main";
//import "./index.css";

ReactDOM.render(
    <BrowserRouter basename="/">
        <Main/>
    </BrowserRouter>,
  document.getElementById("root")
);
