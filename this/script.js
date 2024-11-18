const output = document.getElementById('outputDiv');

function addLetter(element){
    let letterFromContent = element.textContent;
   output.innerHTML += /*HTML*/`
   <span input type = "text"> ${letterFromContent}</span>   `;
}
