"use strict";

var Controller = require('../main');
var c = new Controller();

c
    .setFrameRate(100)
    .setDuration(10000)

    .setString('one')
    .setTopLeft()
    .setXOffset(1)
    .setYOffset(1)

    .setString('two')
    .setTopRight()
    .setXOffset(-1)
    .setYOffset(1)

    .setString('three')
    .setBottomLeft()
    .setXOffset(1)
    .setYOffset(-1)

    .setString('four')
    .setBottomRight()
    .setXOffset(-1)
    .setYOffset(-1)

    .go();
