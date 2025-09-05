"use strict";
var _a;
let userName = (_a = prompt('Enter your name:')) !== null && _a !== void 0 ? _a : 'Guest';
let userAge = Number(prompt('Your age:'));
if (userAge > 17) {
    document.write(`Hello ${userName}`);
}
else {
    document.write(`Error`);
}
