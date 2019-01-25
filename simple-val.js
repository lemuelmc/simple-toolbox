/**
 * Simple value utility
 * 
 * @author Lemuel Raganas <lemuel.raganas@gmail.com>
 **/
import * as local from './simple-val';

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