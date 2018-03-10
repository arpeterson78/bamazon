"use strict"

/**
 * Takes the matrix array and draws a frame.
 */
;
function frame(m) {
    var height = m.length;
    for (var i = 0; i < height; i++) {
        process.stdout.write(m[i].join(''));
    }
}

module.exports = frame;