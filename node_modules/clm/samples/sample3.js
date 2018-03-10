"use strict";

var Controller = require('../main');
var c = new Controller();

c
    .setFrameRate(50)
    .setDuration(10000)

    .setString('i love')
    .setTopLeft()
    .setXOffset(1)
    .setCharacter('a')

    .setString('eating')
    .setStartingPosition(0, 11)
    .setXOffset(1)
    .setCharacter('b')

    .setString('rice')
    .setStartingPosition(0, 22)
    .setXOffset(1)
    .setCharacter('c')

    .setString('and drinking')
    .setStartingPosition(0, 33)
    .setXOffset(1)
    .setCharacter('d')

    .setString('juice')
    .setStartingPosition(0, 44)
    .setXOffset(1)
    .setCharacter('e')

    .go();
