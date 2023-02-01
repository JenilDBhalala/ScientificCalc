const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.op');
const func = document.querySelectorAll('.func');
const input = document.querySelector('.ip-screen');
const output = document.querySelector('.op-screen');

input.innerText = '0';

document.addEventListener('click',(e)=>{
    let txt = e.target.innerText;
    
    if(nums.includes(txt)){
        output.innerText = true;
    }

    let op = output.innerText; 
    
})