const inputScreen = document.querySelector('.ip-screen');
const outputScreen = document.querySelector('.op-screen');
const bottomKeys = document.querySelector('.bottom-grid');


//evaluation
function evaluate(key) {
    if (outputScreen.innerText == '') {
        outputScreen.innerText = inputScreen.innerText + key;
    }
    else if (inputScreen.innerText.length > 0 && outputScreen.innerText.includes('^')) {
        let len = outputScreen.innerText.length;
        let x = outputScreen.innerText.slice(0, len - 1);
        let y = inputScreen.innerText;
        outputScreen.innerText = eval(Math.pow(x, y));
    }
    else {
        outputScreen.innerText = eval(outputScreen.innerText + inputScreen.innerText) + key;
    }
}


//computing factorial of numbers using memoization
var dp = [];
function factorial(num) {
    if (num == 0 || num == 1)
        return 1;
    if (dp[num] > 0)
        return dp[num];
    return dp[num] = factorial(num - 1) * num;
}


//toggling functionalitites in first column when 2nd will click
function toggleFunctionalities(classes){
    const firstFunc = document.querySelectorAll('.first');
    const secondFunc = document.querySelectorAll('.another');

   
    firstFunc.forEach((first)=>{
        if(classes.contains('active')){
            first.style.display = 'none';
        }
        else{
            first.style.display = 'block'
        }
    })

    secondFunc.forEach((second)=>{
        if(classes.contains('active')){
            second.style.display = 'block';
        }
        else{
            second.style.display = 'none'
        }
    })
}


bottomKeys.addEventListener('click', (e) => {
    let classes = e.target.classList;
    let key = e.target.innerText;

    if (classes.contains('nums') || classes.contains('point')) {
        inputScreen.innerText = inputScreen.innerText + key;
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
        evaluate(key);
        inputScreen.innerText = '';
    }
    else if (classes.contains('pi')) {
        inputScreen.innerText = eval(Math.PI);
    }
    else if (classes.contains('euler')) {
        inputScreen.innerText = eval(Math.E);
    }
    else if (classes.contains('delall')) {
        inputScreen.innerText = '';
        outputScreen.innerText = '';
    }
    else if (classes.contains('del')) {
        let txt = inputScreen.innerText;
        let newtxt = txt.slice(0, txt.length - 1);

        inputScreen.innerText = newtxt;
    }
    else if (classes.contains('square')) {
        inputScreen.innerText = eval(Math.pow(inputScreen.innerText, 2));
    }
    else if (classes.contains('pi')) {
        inputScreen.innerText = eval(Math.PI);
    }
    else if (classes.contains('inverse')) {
        inputScreen.innerText = eval(1 / inputScreen.innerText);
    }
    else if (classes.contains('abs')) {
        inputScreen.innerText = eval(Math.abs(inputScreen.innerText));
    }
    else if (classes.contains('exp')) {
        inputScreen.innerText = eval(Math.pow(Math.E, inputScreen.innerText));
    }
    else if (classes.contains('sqrt')) {
        inputScreen.innerText = eval(Math.pow(inputScreen.innerText, 1 / 2));
    }
    else if (classes.contains('fact')) {
        inputScreen.innerText = factorial(inputScreen.innerText);
    }
    else if (classes.contains('tenpow')) {
        inputScreen.innerText = eval(Math.pow(10, inputScreen.innerText));
    }
    else if (classes.contains('equal')) {
        evaluate(key);
    }
    else if (classes.contains('log')) {
        inputScreen.innerText = eval(Math.log(inputScreen.innerText)/Math.log(10));
    }
    else if (classes.contains('ln')) {
        inputScreen.innerText = eval(Math.log(inputScreen.innerText));
    }
    else if (classes.contains('2nd')){
        if(classes.contains('active')){
            classes.remove('active');
        }
        else{
            classes.add('active');
        }
        toggleFunctionalities(classes);
    }
    else if (classes.contains('negate')){
        inputScreen.innerText = eval(-1 * inputScreen.innerText);
    }
})




