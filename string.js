/* eslint-disable no-extend-native */
/* eslint-disable func-names */
/* eslint-disable wrap-iife */
/**
 * Simple utility to extend String features.
 * Copyright Lemuel Raganas
 * Released under the MIT license
 */

const Util = require('./util');

(function () {
	if (!String.prototype.endsWith) {
		String.prototype.endsWith = function (needle) {
			if (Util.isNull(needle)) {
				return false;
			}
			const pos = needle.length > 0 ? this.length - needle.length : 0;
			return this.indexOf(needle, pos) !== -1;
		};
	}

	if (!String.prototype.startsWith) {
		String.prototype.startsWith = function (needle) {
			if (Util.isNull(needle)) {
				return false;
			}
			return this.indexOf(needle) === 0;
		};
	}
})();
