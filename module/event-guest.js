/**
 * Simple event library.
 *
 * Copyright Lemuel Raganas
 * Released under the MIT license
 */

class EventGuest {
	constructor(name, func) {
		this._name = name;
		this._func = func;
	}

	serve(params) {
		this._func(params);
	}

	guestName() {
		return this._name;
	}
}

export default EventGuest;
