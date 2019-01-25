/**
 * Simple URL utility for javascript
 * 
 * @author Lemuel Raganas <lemuel.raganas@gmail.com>
 **/

var LibUrl = require('url');
var Val = require('./simple-val');

class SimpleUrljs {

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

        if (Val.isNull(results)) {
            return null;
        }

        return decodeURI(results[1]) || 0;
    }

    append(segment) {

    }
}

module.exports = SimpleUrljs;