'use strict';

function main() {
    let operator = '';
    let n = '';
    let m = '';

    const btn = function(b) {
        return document.querySelector(`#${b}`);
    }

    const buttonOne = btn('one');
    const buttonTwo = btn('two');
    const buttonThree = btn('three');
    const buttonFour = btn('four');
    const buttonFive = btn('five');
    const buttonSix = btn('six');
    const buttonSeven = btn('seven');
    const buttonEight = btn('eight');
    const buttonNine = btn('nine');

}


function add(n, m) {
    return n + m;
}

function subtract(n, m) {
    return n - m;
}

function multiply(n, m) {
    return n * m;
}

function divide(n, m) {
    return n === 0 || m === 0 ? undefined : n / m;
}

function operate(fn) {
    return function(n, m) {
        return fn(n, m);
    }
}

function passCallback(fn) {
    return operate(fn);
}

const addFn = operate(add);
const subtractFn = operate(subtract);
const multiplyFn = operate(multiply);
const divideFn = operate(divide);

