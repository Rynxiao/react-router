/**
 * Created by Ryn on 2016/8/15.
 * 组件分发文件
 */
"use strict";

import Home from './Home';
import About from './about';
import Inbox from './inbox';

import Main from '../components/layout/Main';

const routes = {
    path: '/',
    component: Main,
    indexRoute: { component: require('../components/Home').default },
    childRoutes: [
        Home,
        About,
        Inbox
    ]
};

export default routes;

