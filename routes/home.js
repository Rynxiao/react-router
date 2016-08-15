/**
 * Created by Ryn on 2016/8/15.
 */

"use strict";

module.exports = {
    path: 'home',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../components/Home').default)
        })
    }
};





