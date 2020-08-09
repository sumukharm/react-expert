import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from './Home.js'
import YouTube from "./YouTube.js";

const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Contents" component={YouTube} />
            </Switch>
        </div>
     )
}

export default MainRouter;