let inputWidth = document.getElementById("width");
let inputHeight = document.querySelector(".input_height");
let inputColor = document.querySelector(".input_color");
let inputRadius = document.querySelector(".isRadius");

let btnClear = document.querySelector(".btn_clear");
let btnCreate = document.querySelector(".btn_create");

let btnUp = document.querySelector(".arrow_up")
let btnDown = document.querySelector(".arrow_down")
let btnLeft = document.querySelector(".arrow_left")
let btnRight = document.querySelector(".arrow_right")

let newDiv;
let mTop = 0;
let mLeft = 0;
let iwValue;
let ihValue;
let icValue;
let isRadius;
let isDiv = false;

btnCreate.addEventListener('click', createDiv);
btnClear.addEventListener('click', clearDiv);

function clearDiv(){
    document.querySelector('.container').firstChild.remove();
    document.querySelector('.container').style.borderRadius = 0;
    inputHeight.removeAttribute("readonly", 1);
    inputWidth.removeAttribute("readonly", 1);
    isDiv = false;
}

function createDiv(){
   if(!isDiv){
        iwValue = inputWidth.value;
        ihValue = inputHeight.value;
        icValue = inputColor.value;
        isRadius = inputRadius.checked;

        if(iwValue >= 50 && ihValue >= 50 && iwValue <= 500 && ihValue <= 500){

            newDiv = document.createElement('div');
            newDiv.style.width = iwValue + 'px';
            newDiv.style.height = ihValue + 'px';
            newDiv.style.backgroundColor = icValue;

            if(isRadius){
                newDiv.style.borderRadius = iwValue/2 + 'px'; 
                document.querySelector('.container').style.borderRadius = iwValue/2 + 'px';
            }

            document.querySelector('.container').prepend(newDiv);
            inputHeight.setAttribute("readonly", 1);
            inputWidth.setAttribute("readonly", 1);

            isDiv = true;
        }

   }
}

btnUp.addEventListener('click', blockUp); 
btnDown.addEventListener('click', blockDown); 
btnLeft.addEventListener('click', blockLeft); 
btnRight.addEventListener('click', blockRight); 


function blockUp(){
    if(mTop-10>=0){
        mTop -= 10;
        newDiv.style.marginTop = mTop +'px';
    }
}

function blockDown(){

    if(500-(Number(mTop)+Number(ihValue)+10)>=0){
        mTop+=10;
        newDiv.style.marginTop = mTop +'px'; 
    }
}

function blockLeft(){
    if(mLeft-10>=0){
        mLeft -= 10;
        newDiv.style.marginLeft = mLeft +'px';
    }
}

function blockRight(){
    if(500-(Number(mLeft)+Number(iwValue)+10)>=0){
        mLeft+=10;
        newDiv.style.marginLeft = mLeft +'px'; 
    }
}

// -------------------------------------------------------------

// let inputReverse = document.querySelector('.reverse_text');

// let btnReverse = document.querySelector('.btn_reverse');

// btnReverse.addEventListener('click', reverseText);

// function reverseText(){
//     let strArr = inputReverse.value.split(" ");

//     for (let index = 0; index < strArr.length; index++) {
//         let element = strArr[index].reverse();
//         console.log(element.reverse());
        
//     }
    


