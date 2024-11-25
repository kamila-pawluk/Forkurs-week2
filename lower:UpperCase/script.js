var inputDiv = document.getElementById("inputBox");
var outputDiv = document.getElementById('outputList');

function showTextInList(input){
    var input = inputDiv.value;
    outputDiv.innerHTML += `
    <li style= "text-transform: capitalize;"> ${input}  </li>
`
}