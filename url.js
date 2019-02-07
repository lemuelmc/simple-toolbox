/* eslint-disable no-useless-escape */
/* eslint-disable prefer-template */
/**
 * Simple URL utility for javascript
 *
 * Copyright Lemuel Raganas
 * Released under the MIT license
 * */

import { parse } from 'url';
import { isNull } from './util';

class SimpleUrl {
	/**
     *
     * @param {string} url
     */
	constructor(url) {
		this.url = url;
		this.libUrl = parse(url);
	}

	/**
     *
     * @param {string} param
     * @returns {string} string | null
     */
	searchParam(param) {
		const results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(this.url);

		if (isNull(results)) {
			return null;
		}

		return decodeURI(results[1]) || 0;
	}
}

export default SimpleUrl;
