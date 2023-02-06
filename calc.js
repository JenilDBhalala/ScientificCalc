const inputScreen = document.querySelector('.ip-screen');
const outputScreen = document.querySelector('.op-screen');
const bottomKeys = document.querySelector('.bottom-grid');
const topKeys = document.querySelector('.top-grid');
const trigonometry = document.querySelector('.trigonometry');
const trigonometryGrid = document.querySelector('.trigonometry-grid');

import { factorial } from './factorial.js'
import { toggleFunctionalities } from './toggle.js'

let str = '';
let flag = false;

//for storing memory
const memory = [];

//evaluation
function evaluate(key) {
    console.log(str);
    if (outputScreen.innerText == '') {
        outputScreen.innerText = str + key;
    }
    else if (inputScreen.innerText.length > 0 && (str.includes('^') || str.includes('yroot') || str.includes('logbase'))) {
        if (str.includes('^')) {
            calculate(key, '^');
        }
        else if (str.includes('yroot')) {
            calculate(key, 'yroot');
        }
        else if (str.includes('logbase')) {
            calculate(key, 'logbase')
            console.log("hello")
        }
    }
    else {
        outputScreen.innerText = str;
        inputScreen.innerText = eval(outputScreen.innerText);

        outputScreen.innerText = str + key;

    }
    str += key;
    flag = false;
    console.log(str);
}


//reverse the string
function reverseString(str) {
    return str.split('').reverse().join('')
}

//for x^y and yrootx functionality
function calculate(key, operator) {
    let revX = '';
    let posOfOperator1, posOfOperator2;
    const ops = ['*', '/', '%', '+', '-'];

    let y = inputScreen.innerText;

    posOfOperator2 = str.indexOf(operator);

    for (let i = posOfOperator2 - 1; i >= 0; i--) {
        if (ops.includes(str[i])) {
            posOfOperator1 = i;
            break;
        }
        else {
            revX += str[i];
        }
    }

    let x = reverseString(revX);

    let newstr = '';
    newstr += str.slice(0, posOfOperator1 + 1);
    if (operator == '^') {
        newstr += Math.pow(x, y);
    }
    else if (operator == 'yroot') {
        newstr += Math.pow(x, 1 / y);
    }
    else if (operator == 'logbase') {
        newstr += (Math.log(x) / Math.log(y));
    }
    str = newstr;

    outputScreen.innerText += inputScreen.innerText;
    inputScreen.innerText = eval(str);
    outputScreen.innerText += key;
    console.log(str);
}



//suppose i used multiple times sqrt then only concatenate final answer to the string
function removeFromBack() {
    const ops = ['*', '/', '%', '+', '-'];

    let len = str.length;
    let pos;
    for (let i = len - 1; i >= 0; i--) {
        if (ops.includes(str[i])) {
            pos = i;
            break;
        }
    }

    let newstr = str.slice(0, pos + 1);
    str = newstr;
}


bottomKeys.addEventListener('click', (e) => {
    let classes = e.target.classList;
    let key = e.target.innerText;

    if (classes.contains('nums') || classes.contains('point')) {
        if (inputScreen.innerText.length >= 0 && flag == false) {
            inputScreen.innerText = '';
            flag = true;
        }
        inputScreen.innerText = inputScreen.innerText + key;
        str += key;
        console.log(str)
    }
    else if (classes.contains('op')) {
        if (classes.contains('multiply')) {
            key = '*';
        }
        else if (classes.contains('division')) {
            key = '/';
        }
        else if (classes.contains('modulo')) {
            key = '%';
        }
        else if (classes.contains('xpowy')) {
            key = '^';
        }
        else if (classes.contains('ythroot')) {
            key = "yroot";
        }
        else if (classes.contains('logxbasey')) {
            key = "logbase";
        }
        evaluate(key);
    }
    else if (classes.contains('pi')) {
        inputScreen.innerText = eval(Math.PI);
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('euler')) {
        inputScreen.innerText = eval(Math.E);
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('delall')) {
        inputScreen.innerText = '';
        outputScreen.innerText = '';
        str = '';
    }
    else if (classes.contains('del')) {
        let txt = inputScreen.innerText;
        let newtxt = txt.slice(0, txt.length - 1);
        inputScreen.innerText = newtxt;

        removeFromBack();
        str += newtxt;
    }
    else if (classes.contains('square')) {
        inputScreen.innerText = eval(Math.pow(inputScreen.innerText, 2));
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('cube')) {
        inputScreen.innerText = eval(Math.pow(inputScreen.innerText, 3));
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('pi')) {
        inputScreen.innerText = eval(Math.PI);
        str += inputScreen.innerText;
    }
    else if (classes.contains('one-by-x')) {
        inputScreen.innerText = eval(1 / inputScreen.innerText);
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('abs')) {
        inputScreen.innerText = eval(Math.abs(inputScreen.innerText));
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('exp')) {
        inputScreen.innerText = eval(Math.pow(Math.E, inputScreen.innerText));
        str += inputScreen.innerText;
    }
    else if (classes.contains('sqrt')) {
        inputScreen.innerText = eval(Math.pow(inputScreen.innerText, 1 / 2));
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('cbrt')) {
        inputScreen.innerText = eval(Math.pow(inputScreen.innerText, 1 / 3));
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('fact')) {
        inputScreen.innerText = factorial(inputScreen.innerText);
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('tenpowx')) {
        inputScreen.innerText = eval(Math.pow(10, inputScreen.innerText));
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('twopowx')) {
        inputScreen.innerText = eval(Math.pow(2, inputScreen.innerText));
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('equal')) {
        evaluate(key);
    }
    else if (classes.contains('log')) {
        inputScreen.innerText = eval(Math.log(inputScreen.innerText) / Math.log(10));
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('ln')) {
        inputScreen.innerText = eval(Math.log(inputScreen.innerText));
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('epowx')) {
        inputScreen.innerText = eval(Math.pow(Math.E, inputScreen.innerText));
        removeFromBack();
        str += inputScreen.innerText;
    }
    else if (classes.contains('2nd')) {
        if (classes.contains('active')) {
            classes.remove('active');
        }
        else {
            classes.add('active');
        }
        toggleFunctionalities(classes);
    }
    else if (classes.contains('negate')) {
        inputScreen.innerText = eval(-1 * inputScreen.innerText);
        removeFromBack();
        str += inputScreen.innerText;
    }

})



//top-memory-part
topKeys.addEventListener('click', (e) => {
    let classes = e.target.classList;
    let memoryClear = document.querySelector('.memory-clear');
    let memoryRestore = document.querySelector('.memory-restore')

    if (classes.contains('memory')) {
        if (classes.contains('memory-clear')) {
            memory.length = 0;
            memoryClear.disabled = true;
            memoryRestore.disabled = true;
        }
        else if (classes.contains('memory-restore')) {
            inputScreen.innerText = memory.slice(-1)[0];
        }
        else if (classes.contains('memory-plus')) {
            if (memory.length == 0 && inputScreen.innerText.length == 0) {
                memory.push(0);
            }
            else if (memory.length == 0 && inputScreen.innerText.length > 0) {
                memory.push(eval(inputScreen.innerText));
            }
            else if (memory.length > 0 && inputScreen.innerText.length > 0) {
                memory[memory.length - 1] = eval(memory[memory.length - 1]) + eval(inputScreen.innerText);
            }
            memoryClear.disabled = false;
            memoryRestore.disabled = false;
        }
        else if (classes.contains('memory-minus')) {
            if (memory.length == 0 && inputScreen.innerText.length == 0) {
                memory.push(0);
            }
            else if (memory.length == 0 && inputScreen.innerText.length > 0) {
                memory.push(eval('-' + inputScreen.innerText));
            }
            else if (memory.length > 0 && inputScreen.innerText.length > 0) {
                memory[memory.length - 1] = eval(memory[memory.length - 1]) - eval(inputScreen.innerText);
            }
            memoryClear.disabled = false;
            memoryRestore.disabled = false;
        }
        else if (classes.contains('memory-store')) {
            if (inputScreen.innerText == '') {
                memory.push(0);
            }
            else if (inputScreen.innerText != '') {
                memory.push(eval(inputScreen.innerText));
            }
            memoryClear.disabled = false;
            memoryRestore.disabled = false;
        }
        console.log(memory)
        str = inputScreen.innerText;
    }
})




//trigonometry
trigonometry.addEventListener('click', (e) => {
    let lastChildClass;

    if (e.target.lastElementChild != undefined) {
        lastChildClass = e.target.lastElementChild.classList;

        if (lastChildClass.contains('trigonometry-grid') && lastChildClass.contains('trigonometry-click')) {
            lastChildClass.remove('trigonometry-click');
        }
        else {
            lastChildClass.add('trigonometry-click');
        }
    }
})


let secondActiveFlag = false;
let hyperActiveFlag = false;


trigonometryGrid.addEventListener('click', (e) => {
    let normalFunctionalityFlag = false;
    let inverseFunctionalityFlag = false;
    let hyperbolicFunctionalityFlag = false;
    let inverseHyperbolicFunctionalityFlag = false;

    let classes = e.target.classList;

    if (classes.contains('secondbtn')) {
        if (classes.contains('second-active')) {
            classes.remove('second-active');
            secondActiveFlag = false;
        }
        else {
            classes.add('second-active');
            secondActiveFlag = true;
        }
    }
    if (classes.contains('hypbtn')) {
        if (classes.contains('hyp-active')) {
            classes.remove('hyp-active');
            hyperActiveFlag = false;
        }
        else {
            classes.add('hyp-active');
            hyperActiveFlag = true;
        }
    }

    let trigonometryGridChildrens = document.querySelector('.trigonometry-grid').children;
    Array.from(trigonometryGridChildrens).forEach((child) => {
        if (secondActiveFlag == false && hyperActiveFlag == false) {
            if (child.classList.contains('normal')) {
                child.style.display = 'block'
            }
            if (child.classList.contains('inverse')) {
                child.style.display = 'none'
            }
            if (child.classList.contains('hyp')) {
                child.style.display = 'none'
            }
            if (child.classList.contains('hyp-inverse')) {
                child.style.display = 'none'
            }
            normalFunctionalityFlag = true;
            inverseFunctionalityFlag = false;
            hyperbolicFunctionalityFlag = false;
            inverseHyperbolicFunctionalityFlag = false;
        }
        else if (secondActiveFlag == true && hyperActiveFlag == false) {
            if (child.classList.contains('normal')) {
                child.style.display = 'none'
            }
            if (child.classList.contains('inverse')) {
                child.style.display = 'block'
            }
            if (child.classList.contains('hyp')) {
                child.style.display = 'none'
            }
            if (child.classList.contains('hyp-inverse')) {
                child.style.display = 'none'
            }
            normalFunctionalityFlag = false;
            inverseFunctionalityFlag = true;
            hyperbolicFunctionalityFlag = false;
            inverseHyperbolicFunctionalityFlag = false;
        }
        else if (secondActiveFlag == false && hyperActiveFlag == true) {
            if (child.classList.contains('normal')) {
                child.style.display = 'none'
            }
            if (child.classList.contains('inverse')) {
                child.style.display = 'none'
            }
            if (child.classList.contains('hyp')) {
                child.style.display = 'block'
            }
            if (child.classList.contains('hyp-inverse')) {
                child.style.display = 'none'
            }
            normalFunctionalityFlag = false;
            inverseFunctionalityFlag = false;
            hyperbolicFunctionalityFlag = true;
            inverseHyperbolicFunctionalityFlag = false;
        }
        else if (secondActiveFlag == true && hyperActiveFlag == true) {
            if (child.classList.contains('normal')) {
                child.style.display = 'none'
            }
            if (child.classList.contains('inverse')) {
                child.style.display = 'none'
            }
            if (child.classList.contains('hyp')) {
                child.style.display = 'none'
            }
            if (child.classList.contains('hyp-inverse')) {
                child.style.display = 'block'
            }
            normalFunctionalityFlag = false;
            inverseFunctionalityFlag = false;
            hyperbolicFunctionalityFlag = false;
            inverseHyperbolicFunctionalityFlag = true;
        }

    })

    if (normalFunctionalityFlag == true) {
        if (classes.contains('sin')) {
            inputScreen.innerText = eval(Math.sin(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
            console.log("hello sin")
        }
        else if (classes.contains('cos')) {
            inputScreen.innerText = eval(Math.cos(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('tan')) {
            inputScreen.innerText = eval(Math.tan(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('csc')) {
            inputScreen.innerText = eval(1 / Math.sin(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('sec')) {
            inputScreen.innerText = eval(1 / Math.cos(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('cot')) {
            inputScreen.innerText = eval(1 / Math.tan(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
    }
    else if (inverseFunctionalityFlag == true) {
        if (classes.contains('sin')) {
            inputScreen.innerText = eval(Math.asin(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
            console.log("hello inverse")
        }
        else if (classes.contains('cos')) {
            inputScreen.innerText = eval(Math.acos(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('tan')) {
            inputScreen.innerText = eval(Math.atan(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('csc')) {
            inputScreen.innerText = eval(1 / Math.asin(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('sec')) {
            inputScreen.innerText = eval(1 / Math.acos(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('cot')) {
            inputScreen.innerText = eval(1 / Math.atan(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
    }
    else if (hyperbolicFunctionalityFlag == true) {
        if (classes.contains('sin')) {
            inputScreen.innerText = eval(Math.sinh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
            console.log("hello hyper")
        }
        else if (classes.contains('cos')) {
            inputScreen.innerText = eval(Math.cosh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('tan')) {
            inputScreen.innerText = eval(Math.tanh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('csc')) {
            inputScreen.innerText = eval(1 / Math.sinh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('sec')) {
            inputScreen.innerText = eval(1 / Math.cosh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('cot')) {
            inputScreen.innerText = eval(1 / Math.tanh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
    }
    else if (inverseHyperbolicFunctionalityFlag == true) {
        if (classes.contains('sin')) {
            inputScreen.innerText = eval(Math.asinh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
            console.log("hello inverse hyper")
        }
        else if (classes.contains('cos')) {
            inputScreen.innerText = eval(Math.acosh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('tan')) {
            inputScreen.innerText = eval(Math.atanh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('csc')) {
            inputScreen.innerText = eval(1 / Math.asinh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('sec')) {
            inputScreen.innerText = eval(1 / Math.acosh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
        else if (classes.contains('cot')) {
            inputScreen.innerText = eval(1 / Math.atanh(inputScreen.innerText));
            removeFromBack();
            str += inputScreen.innerText;
        }
    }
})






