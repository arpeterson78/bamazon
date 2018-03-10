"use strict";

const Animation = require('../dist/lib/animation');
const Symbol = require('../dist/lib/Symbol');

const animation1 = new Animation();
const animation2 = new Animation();
const one = new Symbol();
const two = new Symbol();
const three = new Symbol();

one.registerString('go away i types now');
one.character = 'x';
one.setAsMarquee('left', 5);

two.registerString('wait wut');
two.character = 'o';
two.setAsMarquee('right', 2);

three.registerString('the letter q');
three.character = '+';
three.xOffset = 1;
three.yOffset = -1;
three.y = 50;

animation1.addSymbol('a', one);
animation1.addSymbol('b', two);
animation1.duration = 5000;

animation2.addSymbol('c', three);

animation1.start(()=>{
    animation2.start();
});
