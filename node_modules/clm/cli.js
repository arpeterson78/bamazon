"use strict";

var Controller = require('./main');
var commander = require('commander');
var controller = new Controller();

var speed;
var duration;
var message;
var xOff;
var yOff;

// set up commander options
commander
    .option('-m, --message [value]', 'String to animate as a message')
    .option('-s, --speed <n>', 'Speed of your animation', parseInt)
    .option('-d, --duration <n>', 'Duration of your animation in milliseconds', parseInt)
    .option('-x, --xOffset <n>', 'X-offset for your symbol per frame', parseInt)
    .option('-y, --yOffset <n>', 'Y-offset for your symbol per frame', parseInt)
    .parse(process.argv);

if (process.argv.length < 2) {
    commander.outputHelp();
}

// set variables based on commander input
message = commander.message;
speed = commander.speed;
xOff = commander.xOffset;
yOff = commander.yOffset;
duration = commander.duration || 5000;

// use passed variables
if (message) {
    controller.setString(message);
}
if (speed) {
    controller.setSpeed(speed);
}
if (xOff) {
    controller.setXOffset(xOff);
}
if (yOff) {
    controller.setYOffset(yOff);
}

controller.setDuration(duration);
controller.go();
