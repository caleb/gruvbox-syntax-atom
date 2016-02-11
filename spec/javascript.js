// jsdoc

/**
 * @param {string[]} str
 * @return {string}
 */

// import and export

import { assign } from 'lodash';

export const TEST = 5;

export default {};

// variables and values

var abc, def;
var n = 0 + n++;
var s = 'string';
var b = true || false;
var { n } = { n: null };
var u = undefined;
let l = 'scoped'.length;
let oct = 0x0F;
const [ LETTERS ] = 'ok' && my.nested['alphabet'].property[0];
const r = /^([A-Z\.].)a+b*c?$/igmyu;
const intr = `Hello ${world.toUpperCase()}!`;
const arr = [];

// functions

calling();
new Calling();
calling.call(null);
calling.apply(null);
calling.bind(null);

function* Func() {
    this.fn1 = function() {};
    this.fn2 = () => {};
    this.fn3 = arg => {};
    this.var = 0;
    yield;
    return;
}

Func.prototype.fn4 = () => {};

Func.call();

String();
Boolean();
Array.isArray();
Number.isNaN();
Number.prototype.parseInt.call();

var obj = {
    get prop () {},
    set prop (v) {},
    shortFn() {},
    fn: () => {},
    key1: 0,
    [key2]: 0,
};

class Duck extends Animal {
    constructor() {}
    quack() { super.quack(); }
    static count1() {}
}

var FemaleDuck = class extends Duck {};

var d = new Duck();

// constructs

if (a === true) {}
else {}

switch (val) {
    default:
    case 0:
        break;
}

for (let i = 0; i < 10; i++) {
    continue;
}

while (a !== 1 && b == true) {}

do {} while (c <= 0 || d >= 1);

try {}
catch (err) {}
finally {}

// global

global.setTimeout();
window.setInterval();
console.log();

JSON.parse();

// node

var mod = require('mod');

exports.fn = () => {};
module.exports = { n, x };

process.exit(-1);
process.env.PORT;
