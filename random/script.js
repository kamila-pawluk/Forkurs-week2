var pointsCounter = 0;
let firstNumber = 0;
let secondNumber = 0;

function generateRandomNumbers(){
    
    firstNumber = Math.floor(Math.random() * 10);
    secondNumber = Math.floor(Math.random() * 10);
    document.getElementById('firstNumber').innerHTML = firstNumber;
    document.getElementById('secondNumber').innerHTML = secondNumber;
}

function submitResult(){
    let inputField = document.getElementById('inputField').value;

    if(firstNumber > secondNumber && inputField == '>'){
        pointsCounter++;
    } else if(firstNumber < secondNumber && inputField == '<'){
        pointsCounter++;
    } else if(firstNumber == secondNumber && inputField == '='){
        pointsCounter++;
    } else{
        pointsCounter--;
    }
    console.log(pointsCounter);
    document.getElementById('points').textContent = `Points: ${pointsCounter}`;
}