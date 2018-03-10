"use strict";

// var Controller = require('../main');
require('../babelConf');
var Controller = require('../src/lib/Controller');
var c = new Controller();

c
    .setFrameRate(400)
    .setDuration(10000)

    .setString('test 1')
    .setTopLeft()
    .setXOffset(3)
    .setYOffset(1)

    .setString('the ol')
    .setTopRight()
    .setXOffset(-5)
    .setYOffset(2)

    .setString('tester')
    .setBottomRight()
    .setXOffset(-5)
    .setYOffset(-2)

    .go();
