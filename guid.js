/**
 * GUID Utility
 *
 * Copyright Lemuel Raganas
 * Released under the MIT license
 * */

import * as SimpleUtil from './util';

/**
 *
 * @param {string} guid
 * @returns {bool}
 */
export function isValid(guid) {
	const pat = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

	if (SimpleUtil.isNull(guid)) {
		return false;
	}

	if (typeof guid !== 'string') {
		return false;
	}

	const result = pat.test(guid);
	return result;
}

/**
 * @returns {string}
 */
export function create() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (e) => {
		// eslint-disable-next-line no-bitwise
		const n = (16 * Math.random()) | 0;
		// eslint-disable-next-line no-bitwise
		const i = e === 'x' ? n : (3 & n) | 8;
		return i.toString(16);
	});
}
