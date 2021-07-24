import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import { Home, About, Services } from './Pages'

export default function Routes() {
    return (
        <Switch>
            <Route path="/About">
                <About />
            </Route>
            <Route path="/Services">
                <Services />
            </Route>
            {/* Home page need to have "exact={true}" */}
            <Route path="/" exact={true}>
                <Home />
            </Route>
        </Switch>
    )
}
