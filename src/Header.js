import React from 'react'
import TabElement from './TabElement'
import {
    NavLink //needs to import NavLink instead just a Link
} from "react-router-dom";

export default function Header() {
    return (
        <div className="tabs">

            {/* TabElement is external component */}
            <TabElement>
                {/* a tag is converted to Link to tag */}
                <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            </TabElement>

            <TabElement>
                <NavLink to="/About" activeClassName="is-active">About</NavLink>
            </TabElement>

            <TabElement>
                <NavLink to="/Services" activeClassName="is-active">Services</NavLink>
            </TabElement>

        </div >
    )
}
