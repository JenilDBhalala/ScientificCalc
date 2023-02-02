const inputScreen = document.querySelector('.ip-screen');
const outputScreen = document.querySelector('.op-screen');
const bottomKeys = document.querySelector('.bottom-grid');


//evaluation
function evaluate(key) {
    if(outputScreen.innerText == ''){
        outputScreen.innerText = inputScreen.innerText + key;
    }
    else if(inputScreen.innerText.length>0 && outputScreen.innerText.includes('^')){
        let len = outputScreen.innerText.length;
        let x = outputScreen.innerText.slice(0, len-1);
        let y = inputScreen.innerText;
        outputScreen.innerText = eval(Math.pow(x,y));
    }
    else{
        outputScreen.innerText = eval(outputScreen.innerText + inputScreen.innerText) + key;
    }
}

bottomKeys.addEventListener('click', (e) => {
    let classes = e.target.classList;
    let key = e.target.innerText;

    if (classes.contains('nums') || classes.contains('point') ) {
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
    else if(classes.contains('abs')){
        inputScreen.innerText = eval(Math.abs(inputScreen.innerText));
    }
    else if(classes.contains('exp')){
        inputScreen.innerText = eval(Math.pow(Math.E,inputScreen.innerText));
    }
    else if(classes.contains('sqrt')){
        inputScreen.innerText = eval(Math.pow(inputScreen.innerText,1/2));
    }
    else if (classes.contains('equal')) {
        evaluate(key);
    }
})


