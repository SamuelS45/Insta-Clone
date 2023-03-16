import React from "react";
import  ReactDOM  from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
// import Post from "./components/Post";

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <div className="container">
    {/* <h1>Hello World </h1> */}
    <HashRouter>
    <App/>
    </HashRouter>
    </div>
)