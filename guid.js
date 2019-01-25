/**
 * GUID Utility
 * 
 * @author Lemuel Raganas <lemuel.raganas@gmail.com>
 **/

import * as SimpleGuid from './guid';
import * as SimpleUtil from './util';

/**
 * 
 * @param {string} guid 
 * @returns {bool}
 */
export function isValid(guid) {
    var pat = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    if (SimpleUtil.isNull(guid)) {
        return false;
    }

    if (typeof guid !== 'string') {
        return false;
    }

    let result = pat.test(guid);
    return result;
}

/**
 * @returns {string}
 */
export function create() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var n = 16 * Math.random() | 0,
            i = "x" == e ? n : 3 & n | 8;
        return i.toString(16);
    });
}