"use strict";

var size = require('./size');
var defaultWidth = size().width;
var defaultHeight = size().height;

/**
 * Generates a new blank matrix that fits nicely into your terminal window
 * @param width <number> - defaults to terminal columns
 * @param height <number> - defaults to terminal rows
 * @returns {Array}
 */
var blankMatrix = function blankMatrix(width, height) {
    var matrix = [];
    width = width || defaultWidth;
    height = height || defaultHeight;

    for (var i = 0; i <= height; i++) {
        var arr = [];
        for (var j = 0; j <= width; j++) {
            arr.push(' ');
        }
        matrix.push(arr);
    }
    return matrix;
};

module.exports = blankMatrix;