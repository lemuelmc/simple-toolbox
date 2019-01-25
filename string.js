/**
 * Simple utility to extend String features.
 */

const Util = require('./util');

(function () {

    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (needle) {
            if (Util.isNull(needle)) {
                return false;
            }
            var pos = needle.length > 0 ? this.length - needle.length : 0;
            return this.indexOf(needle, pos) !== -1;
        }
    }

    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (needle) {
            if (Util.isNull(needle)) {
                return false;
            }
            return this.indexOf(needle) === 0;
        }
    }
})();