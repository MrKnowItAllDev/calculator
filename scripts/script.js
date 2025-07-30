'use strict';

function main() {
    let curr = '';
    let next = '';
    let operator = '';

    const btn = function(b) {
        return document.querySelector(`#${b}`);
    }

    const btnDelete = btn('delete');
    const clear = btn('clear');
    const btnEquals = btn('equals');
    const btnDecimal = btn('dot');
    const btnNegate = btn('negate');

    const btnArray = [];

    const display = document.querySelector('.display');
    const btns = Array.from(document.querySelectorAll('.number-btn'));
    const operatorBtns = Array.from(document.querySelectorAll('.operator'));
    const historyDisplay = document.querySelector('.display-history');

    for (const btn of btns) {
        let color = btn.style.backgroundColor;
        btn.addEventListener('click', (e) => {
            if (!operator.length) {
                curr += btn.textContent;
                display.textContent = curr;
            }
            else {
                next += btn.textContent;
                display.textContent = next;
                historyDisplay.textContent += ' '+ next;
            }
        });
        btn.addEventListener('mouseover',(e) => {
            e.target.setAttribute('style', 'background-color: gray;');
            e.target.addEventListener('mouseleave', (e) => {
                e.target.setAttribute('style', `background-color: ${color};`);
            });
        });
    }

    for (const btn of operatorBtns) {
        btn.addEventListener('click', (e) => {
            if (!curr) return;
            if (!operator) {
                operator = btn.textContent;
                historyDisplay.textContent = `${curr} ${operator}`;
            }
            console.log(operator);
            if (next) {
                curr = perform(operator, curr, next);
                operator = btn.textContent;
                historyDisplay.textContent = `${curr} ${operator}`;
                display.textContent = curr;
                next = '';
            }
        });
    }

    btnDelete.addEventListener('click', (e) => {
        curr = '';
        next = '';
        operator = '';
        document.querySelector('.display').textContent = '';
        document.querySelector('.display-history').textContent = '';
    });

    btnEquals.addEventListener('click', (e) => {
        curr = perform(operator, curr, next);
        next = '';
        operator = '';
        display.textContent = curr;
    });
}

const add = (n, m) => +n + +m;
const subtract = (n, m) => +n - +m;
const multiply = (n, m) => +n * +m;
const divide = (n, m) => n === 0 || m === 0 ? undefined : +n / +m;

function perform(operator, n, m) {
    if (operator === '+') return add(n, m);
    else if (operator === '-') return subtract(n, m);
    else if (operator === 'x') return multiply(n, m);
    else if (operator === '/') return divide(n, m);
}

main();