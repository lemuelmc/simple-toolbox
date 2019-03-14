/**
 * Simple string templating utility.
 * Copyright Lemuel Raganas
 * Released under the MIT license
 */

class SimpleTemplate {
	constructor(options) {
		this._leftMarker = '{{';
		this._rightMarker = '}}';
		this._template = '';
		this._map = {};

		if (options !== null || options !== undefined) {
			this._template = options.template || this._template;
			this._leftMarker = options.leftMarker || this._leftMarker;
			this._rightMarker = options.rightMarker || this._rightMarker;
		}
	}

	setValue(k, v) {
		this._map[k] = v;
		return this;
	}

	toString() {
		let strValue = this._template;
		const that = this;
		const keys = Object.keys(this._map);
		keys.forEach((k) => {
			const pattern = that._leftMarker + k + that._rightMarker;
			const regex = new RegExp(pattern, 'g');
			strValue = strValue.replace(regex, that._map[k]);
		});
		return strValue;
	}
}

export default SimpleTemplate;
