/**
 * Copyright 2019 Lemuel Raganas <lemuel.raganas@gmail.com>
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var EventGuest = require('./module/event-guest');

class SimpleEvent {

    constructor() {
        // Each guest belongs to a table. A table must be a unique name.
        this._tables = {};
        this._tableNames = [];
    }

    /**
     * 
     * @param {string} tableName 
     * @param {func} func 
     * @param {string} guestName 
     * @returns {EventCoordinator}
     */
    register(tableName, func, guestName) {
        guestName = guestName || Date.now();
        if (tableName in this._tables) {
            var table = this._tables[tableName]; // get the table name
            var guest = new EventGuest(guestName, func);

            // Assign the guest to the table
            table.push(guest);
            this._tables[tableName] = table;
            return this;
        }

        var guest = new EventGuest(guestName, func);
        var table = [];
        table.push(guest);
        this._tables[tableName] = table;
        this._tableNames.push(tableName);
        return this;
    }

    /**
     * @returns {array}
     */
    guests() {
        return this._tables;
    }

    serve(tableName, params) {
        if (tableName in this._tables) {
            var table = this._tables[tableName];
            table.forEach(guest => {
                guest.serve(params);
            });
            return;
        }
    }

    kick(guestName) {
        let that = this;
        this._tableNames.forEach(tableName => {
            if (tableName in that._tables) {
                var foundIndex = -1;
                var table = that._tables[tableName];
                for (var i = 0; i < table.length; i++) {
                    var guest = table[i];
                    if (guest.getGuestName() === guestName) {
                        foundIndex = i;
                        break;
                    }
                }

                if (foundIndex > -1) {
                    table.splice(foundIndex, 1);
                }
            }
        });
    }

    clear(tableName) {
        if (tableName in this._tableNames) {
            var table = this._tables[tableName];
            table = [];
            this._tables[tableName] = table;
            return this;
        }
        return this;
    }

    evacuate() {
        this._tables = {};
        this._tableNames = [];
        return this;
    }
}

module.exports = SimpleEvent;