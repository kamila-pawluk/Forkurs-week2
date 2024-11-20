let app = document.getElementById('backgroundToChange');

function activeLight(){
if(app.classList.contains('active')){
    app.classList.remove('active');
    document.getElementById('lightNotification').innerHTML = "Light is turned on";
} else { 
    app.classList.add('active');
    document.getElementById('lightNotification').innerHTML = "Light is turned off";
}
}
function updateView(){
    app.innerHTML = /*HTML*/`
    <div id="backgroundToChange"> 
    ${activeLight()};
    </div>
`}