/**
 * Simple value utility
 * 
 * Copyright Lemuel Raganas
 * Released under the MIT license
 **/

/**
 * 
 * @param {any} o 
 */
export function isNull(o) {
    if (o === undefined || o === null) {
        return true;
    }

    return false;
}

/**
 * 
 * @param {any} o
 * @returns {bool} 
 */
export function isUndefined(o) {
    if (o === undefined) {
        return true;
    }

    return false;
}