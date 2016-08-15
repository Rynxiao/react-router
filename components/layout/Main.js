/**
 * Created by Ryn on 2016/8/15.
 */
"use strict";

import React from 'react';
import { Link } from 'react-router'

const Main = React.createClass({
    getInitialState() {
        return {
            active : 'home'
        }
    },
    render() {
        let { active } = this.state;
        return (
            <div className="root">
                <h1 className="header">App</h1>
                <ul className="navbar flex">
                    <li className="flex-col">
                        <Link className={active==='home'?'active':''} to="/home" onClick={()=>{this.setState({active : "home"})}}>Home</Link>
                    </li>
                    <li className="flex-col">
                        <Link className={active==='about'?'active':''} to="/about" onClick={()=>{this.setState({active : "about"})}}>About</Link>
                    </li>
                    <li className="flex-col">
                        <Link className={active==='inbox'?'active':''} to="/inbox" onClick={()=>{this.setState({active : "inbox"})}}>Inbox</Link>
                    </li>
                </ul>

                {this.props.children}
            </div>
        )
    }
});

export default Main;