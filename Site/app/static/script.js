    for(let i = 0; i < 9; i++){
      let id = 'colpic' + i
      console.log(id)
      document.getElementById(id).style.display = "none"
    }

var cMode = false
function Getrange(){

  document.getElementById("ColorOP").innerHTML = document.getElementById("ColorRg").value
}

function Create(){
    cMode = true
    for(let i = 0; i < 9; i++){
      let id = 'colpic' + i
      console.log(id)
      document.getElementById(id).style.display = ""
    }


    for(let i = 0; i < 9; i++){
      let id = 'colorgen' + i
      let id2 = "hexa" + i
      console.log(id)
      document.getElementById(id).style.backgroundColor = 'rgba(174, 174, 174, 0)'
      document.getElementById(id2).style.color = 'rgba(174, 174, 174, 0)'
      document.getElementById(id2).style.textShadow = 'rgba(174, 174, 174, 0)'

    }

}
function Generate(){
    cMode = false
    for(let i = 0; i < 9; i++){
      let id = 'colpic' + i
      console.log(id)
      document.getElementById(id).style.display = "none"
    }

    for(let i = 0; i < 9; i++){
      let id = 'colorgen' + i
      let id2 = 'hexa' + i

      console.log(id)
      document.getElementById(id).style.display = "rgba(174, 174, 174, 255)"
            document.getElementById(id2).style.color = 'rgba(255, 255, 255, 255)'
      document.getElementById(id2).style.textShadow = 'rgba(174, 174, 174, 255)'
    } 

}
    

function Getrange(){
  document.getElementById("ColorOP").innerHTML = document.getElementById("ColorRg").value
  console.log(document.getElementById("ColorRg").value)
  amount1()
  amount2()
  amount3()
  amount4()
  amount5()
  amount6()
  amount7()
  amount8()
 }

function changecol(){
  if(cMode == false){
    let randHex = randcolHex()

    document.getElementById("colorgen0").style.backgroundColor = randHex
    document.getElementById("hexa0").innerHTML = randHex
    document.getElementById("hexa0").style.color = '#ffffff'
    if (document.getElementById("ColorRg").value > 1){
        document.getElementById("colorgen0").style.display
    }
  }

  }

  function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function randcolHex(){
  var o = Math.round, r = Math.random, s = 255;
  return(rgbToHex(o(r()*s),o(r()*s),o(r()*s)))
  }

function amount1(){
  if (document.getElementById("ColorRg").value < 2){
      document.getElementById("colorgen1").style.display = 'none'
  }
  else{
      document.getElementById("colorgen1").style.display = ''
  }
}
function changecol1(){
  if(cMode == false){
    let randHex = randcolHex1()

    document.getElementById("colorgen1").style.backgroundColor = randHex
    document.getElementById("hexa1").innerHTML = randHex
    document.getElementById("hexa1").style.color = '#ffffff'
  }

}
function componentToHex1(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex1(r, g, b) {
  return "#" + componentToHex1(r) + componentToHex1(g) + componentToHex1(b);
}

function randcolHex1(){
  var o = Math.round, r = Math.random, s = 255;
  return(rgbToHex1(o(r()*s),o(r()*s),o(r()*s)))
}



function amount2(){
  if (document.getElementById("ColorRg").value < 3){
      document.getElementById("colorgen2").style.display = 'none'
  }
  else{
      document.getElementById("colorgen2").style.display = ''
  }
}
function changecol2(){
  if(cMode == false){
    let randHex = randcolHex2()

    document.getElementById("colorgen2").style.backgroundColor = randHex
    document.getElementById("hexa2").innerHTML = randHex
    document.getElementById("hexa2").style.color = '#ffffff'
  }
}
function componentToHex2(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex2(r, g, b) {
  return "#" + componentToHex2(r) + componentToHex2(g) + componentToHex2(b);
}

function randcolHex2(){
  var o = Math.round, r = Math.random, s = 255;
  return(rgbToHex2(o(r()*s),o(r()*s),o(r()*s)))
}



function amount3(){
  if (document.getElementById("ColorRg").value < 4){
      document.getElementById("colorgen3").style.display = 'none'
  }
  else{
      document.getElementById("colorgen3").style.display = ''
  }
}
function changecol3(){
  if(cMode == false){
    let randHex = randcolHex3()

    document.getElementById("colorgen3").style.backgroundColor = randHex
    document.getElementById("hexa3").innerHTML = randHex
    document.getElementById("hexa3").style.color = '#ffffff'
  }
}
function componentToHex3(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex3(r, g, b) {
  return "#" + componentToHex3(r) + componentToHex3(g) + componentToHex3(b);
}

function randcolHex3(){
  var o = Math.round, r = Math.random, s = 255;
  return(rgbToHex3(o(r()*s),o(r()*s),o(r()*s)))
}




function amount4(){
  if (document.getElementById("ColorRg").value < 5){
      document.getElementById("colorgen4").style.display = 'none'
  }
  else{
      document.getElementById("colorgen4").style.display = ''
  }
}
function changecol4(){
  if(cMode == false){
    let randHex = randcolHex4()

    document.getElementById("colorgen4").style.backgroundColor = randHex
    document.getElementById("hexa4").innerHTML = randHex
    document.getElementById("hexa4").style.color = '#ffffff'
  }
}
function componentToHex4(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex4(r, g, b) {
  return "#" + componentToHex4(r) + componentToHex4(g) + componentToHex4(b);
}

function randcolHex4(){
  var o = Math.round, r = Math.random, s = 255;
  return(rgbToHex4(o(r()*s),o(r()*s),o(r()*s)))
}




function amount5(){
  if (document.getElementById("ColorRg").value < 6){
      document.getElementById("colorgen5").style.display = 'none'
  }
  else{
      document.getElementById("colorgen5").style.display = ''
  }
}
function changecol5(){
  if(cMode == false){
    let randHex = randcolHex5()

    document.getElementById("colorgen5").style.backgroundColor = randHex
    document.getElementById("hexa5").innerHTML = randHex
    document.getElementById("hexa5").style.color = '#ffffff'
  }
}
function componentToHex5(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex5(r, g, b) {
  return "#" + componentToHex5(r) + componentToHex5(g) + componentToHex5(b);
}

function randcolHex5(){
  var o = Math.round, r = Math.random, s = 255;
  return(rgbToHex5(o(r()*s),o(r()*s),o(r()*s)))
}




function amount6(){
  if (document.getElementById("ColorRg").value < 7){
      document.getElementById("colorgen6").style.display = 'none'
  }
  else{
      document.getElementById("colorgen6").style.display = ''
  }
}
function changecol6(){
  if(cMode == false){
    let randHex = randcolHex6()

    document.getElementById("colorgen6").style.backgroundColor = randHex
    document.getElementById("hexa6").innerHTML = randHex
    document.getElementById("hexa6").style.color = '#ffffff'
  }
}
function componentToHex6(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex6(r, g, b) {
  return "#" + componentToHex6(r) + componentToHex6(g) + componentToHex6(b);
}

function randcolHex6(){
  var o = Math.round, r = Math.random, s = 255;
  return(rgbToHex6(o(r()*s),o(r()*s),o(r()*s)))
}




function amount7(){
  if (document.getElementById("ColorRg").value < 8){
      document.getElementById("colorgen7").style.display = 'none'
  }
  else{
      document.getElementById("colorgen7").style.display = ''
  }
}
function changecol7(){
  if(cMode == false){
    let randHex = randcolHex7()

    document.getElementById("colorgen7").style.backgroundColor = randHex
    document.getElementById("hexa7").innerHTML = randHex
    document.getElementById("hexa7").style.color = '#ffffff'
  }
}
function componentToHex7(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex7(r, g, b) {
  return "#" + componentToHex7(r) + componentToHex7(g) + componentToHex7(b);
}

function randcolHex7(){
  var o = Math.round, r = Math.random, s = 255;
  return(rgbToHex7(o(r()*s),o(r()*s),o(r()*s)))
}





function amount8(){
  if (document.getElementById("ColorRg").value < 9){
      document.getElementById("colorgen8").style.display = 'none'
  }
  else{
      document.getElementById("colorgen8").style.display = ''
  }
}
function changecol8(){
  if(cMode == false){
    let randHex = randcolHex8()

    document.getElementById("colorgen8").style.backgroundColor = randHex
    document.getElementById("hexa8").innerHTML = randHex
    document.getElementById("hexa8").style.color = '#ffffff'
  }
}
function componentToHex8(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex8(r, g, b) {
  return "#" + componentToHex8(r) + componentToHex8(g) + componentToHex8(b);
}

function randcolHex8(){
  var o = Math.round, r = Math.random, s = 255;
  return(rgbToHex8(o(r()*s),o(r()*s),o(r()*s)))
}

