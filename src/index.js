import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';
import App from "./App";
import RegistrationPage from "./components/Signup";
import LoginPage from "./components/Login";
import Box1 from "./components/Box";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <App/>
    {/* <Box1/> */}
    </React.StrictMode>
)
// import './app';
// import App from './app';
// import {a as x, display, Example} from "./module";
// import checked from "./module1";

// checked();
// console.log(x);

