const firstNumber = document.getElementById('firstNumer');
const secondNumber = document.getElementById('secondNumer');
const inputField = document.getElementById('inputField');
var pointsCounter = document.getElementById('points');

function generateRandomNumbers(){
    let rng = Math.floor(Math.random() * 10);
    firstNumber.innerHTML = rng;
    secondNumber.innerHTML = rng;
}

function addInput(){

}

function submitResult(){
    if(firstNumber>secondNumber || inputField == '>'){
        pointsCounter++;
    } else if( firstNumber<secondNumber || inputField == '<'){
        pointsCounter++;
    } else if(firstNumber=secondNumber || inputField == '='){
        pointsCounter++;
    } else{
        pointsCounter--;
    }

}