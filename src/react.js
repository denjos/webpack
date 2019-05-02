import ReactDOM from "react-dom";
import {App} from "./components/App.jsx";
import React from "react";
import logo from './img/react-logo.svg'
import data from './data.json';
ReactDOM.render(< App name="React" logo={logo} menu={data.links} />, document.getElementById("app"));

