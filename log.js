/** 
 * Log utility
 * @author Lemuel Raganas <lemuel.raganas@gmail.com>
 **/


class SimpleLogjs {

    /**
     * 
     * @param {object} config 
     * @param {string} config.label
     * @param {boolean} config.debug
     */
    constructor(config) {
        if (config === undefined) {
            return;
        }
        this.label = config.label === undefined ? 'SimpleLogjs' : config.label;
        this.debug = config.debug === undefined ? false : config.debug;
        this.version = '0.0.1';
    }

    info() {
        if (this.debug) {
            var args = Array.prototype.slice.call(arguments);
            args.unshift("[" + this.label + "]:");
            console.info.apply(console, args);
        }
    }

    warn() {
        if (this.debug) {
            var args = Array.prototype.slice.call(arguments);
            args.unshift("[" + this.label + "]:");
            console.warn.apply(console, args);
        }
    }

    error() {
        if (this.debug) {
            var args = Array.prototype.slice.call(arguments);
            args.unshift("[" + this.label + "]:");
            console.error.apply(console, args);
        }
    }

    log() {
        if (this.debug) {
            var args = Array.prototype.slice.call(arguments);
            args.unshift("[" + this.label + "]:");
            console.log.apply(console, args);
        }
    }
}

module.exports = SimpleLogjs