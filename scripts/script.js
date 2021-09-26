let buttonOne = document.getElementById("buttonOne");
let mapButtons = document.getElementsByClassName("mapButton");

buttonOne.onclick = function() { makeGreen(buttonOne) }

function makeGreen(button) { button.style.backgroundColor = "#83d57b"; }

// BT Figure this out!
for(let i = 0; i < mapButtons.length; i++) {
    mapButtons[i].addEventListener('click', makeGreen(mapButtons[i]), false)
}