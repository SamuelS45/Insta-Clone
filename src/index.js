import React from "react";
import  ReactDOM  from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { ContextProvider } from './components/post/Context';

// const Data = {
// import Post from "./components/Post";

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <div className="container">
    {/* <h1>Hello World </h1> */}
    <HashRouter>
    <ContextProvider>
            <App/>
    </ContextProvider>
    </HashRouter>
    </div>
)