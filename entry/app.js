/**
 * Created by Ryn on 2016/8/15.
 * 入口文件
 */
"use strict";

import React from 'react'
import { render } from 'react-dom'

// First we import some modules...
import { Router, hashHistory } from 'react-router'
import routes from '../routes';

// load style
import '../style/app.css';

render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('container')
);