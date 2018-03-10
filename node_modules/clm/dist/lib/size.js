"use strict";

var size = undefined;

/**
 * Gets the terminal size
 * @returns {{width: *, height}}
 */
module.exports = function () {
    size = size || process.stdout.getWindowSize();
    return {
        width: size[0] - 1,
        height: size[1] - 1
    };
};