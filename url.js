/**
 * Simple URL utility for javascript
 * 
 * Copyright Lemuel Raganas
 * Released under the MIT license
 **/

var LibUrl = require('url');
var SimpleUtil = require('./util');

class SimpleUrl {

    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this.url = url;
        this.libUrl = LibUrl.parse(url);
    }

    /**
     * 
     * @param {string} param 
     * @returns {string} string | null
     */
    searchParam(param) {
        var results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(this.url);

        if (SimpleUtil.isNull(results)) {
            return null;
        }

        return decodeURI(results[1]) || 0;
    }

    append(segment) {

    }
}

module.exports = SimpleUrl;