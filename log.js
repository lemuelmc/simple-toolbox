/* eslint-disable no-console */
/**
 * Log utility
 *
 * Copyright Lemuel Raganas
 * Released under the MIT license
 * */

class SimpleLog {
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
			// eslint-disable-next-line prefer-rest-params
			const args = Array.prototype.slice.call(arguments);
			args.unshift(`[${this.label}]:`);
			// eslint-disable-next-line prefer-spread
			console.info.apply(console, args);
		}
	}

	warn() {
		if (this.debug) {
			// eslint-disable-next-line prefer-rest-params
			const args = Array.prototype.slice.call(arguments);
			args.unshift(`[${this.label}]:`);
			// eslint-disable-next-line prefer-spread
			console.warn.apply(console, args);
		}
	}

	error() {
		if (this.debug) {
			// eslint-disable-next-line prefer-rest-params
			const args = Array.prototype.slice.call(arguments);
			args.unshift(`[${this.label}]:`);
			// eslint-disable-next-line prefer-spread
			console.error.apply(console, args);
		}
	}

	log() {
		if (this.debug) {
			// eslint-disable-next-line prefer-rest-params
			const args = Array.prototype.slice.call(arguments);
			args.unshift(`[${this.label}]:`);
			// eslint-disable-next-line prefer-spread
			console.log.apply(console, args);
		}
	}
}

module.exports = SimpleLog;
