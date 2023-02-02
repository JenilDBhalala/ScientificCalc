// const nums = document.querySelectorAll('.nums');
// const operators = document.querySelectorAll('.op');
// const func = document.querySelectorAll('.func');
// const del = document.querySelector('.del');
// const delall = document.querySelector('.delall');
// const equal = document.querySelector('.equal');
// const point = document.querySelector('.point');


const inputScreen = document.querySelector('.ip-screen');
const outputScreen = document.querySelector('.op-screen');
const bottomKeys = document.querySelector('.bottom-grid');


//evaluation
function evaluate(txt) {
    outputScreen.innerText = eval(outputScreen.innerText + inputScreen.innerText) + txt;
}


bottomKeys.addEventListener('click', (e) => {
    let classes = e.target.classList;
    let txt = e.target.innerText;

    if (classes.contains('nums') || classes.contains('point') ) {
        inputScreen.innerText = inputScreen.innerText + txt;
    }
    else if (classes.contains('op')) {
        if (classes.contains('multiply')) {
            txt = '*';
        }
        else if (classes.contains('division')) {
            txt = '/';
        }
        else if (classes.contains('modulo')) {
            txt = '%';
        }
        evaluate(txt);
        inputScreen.innerText = '';
    }
    else if(classes.contains('pi')){
        inputScreen.innerText = eval(Math.PI);
    }
    else if(classes.contains('euler')){
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
    else if(classes.contains('pow')){
        inputScreen.innerText = eval(Math.pow(inputScreen.innerText,2));
    }
    else if(classes.contains('pi')){
        inputScreen.innerText = eval(Math.PI);
    }
    else if(classes.contains('inverse')){
        inputScreen.innerText = eval(1/inputScreen.innerText);
    }
    else if(classes.contains('pow')){
        inputScreen.innerText = eval(Math.PI);
    }
    else if(classes.contains('pow')){
        inputScreen.innerText = eval(Math.PI);
    }
    else if(classes.contains('pow')){
        inputScreen.innerText = eval(Math.PI);
    }
    else if(classes.contains('pow')){
        inputScreen.innerText = eval(Math.PI);
    }
    else if(classes.contains('pow')){
        inputScreen.innerText = eval(Math.PI);
    }
    else if (classes.contains('equal')) {
        evaluate(txt);
    }
    
})


