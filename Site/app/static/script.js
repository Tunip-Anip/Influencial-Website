var slider = document.getElementById("ColorRg")

ColorOP.innerHTML = slider.value;

function Getrange(){
  ColorOP = document.getElementById("ColorRg").value;
  document.getElementsByClassName("ColorOP").innerHTML = ColorOP
}

function changecol(){
document.getElementById("colorgen").style.backgroundColor = Math.random()
}
