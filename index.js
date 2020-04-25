
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var diceImage = "images/dice" + randomNumber1 +".png";
document.querySelector(".img1").setAttribute("src",diceImage);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var diceImage = "images/dice" + randomNumber2 +".png";
document.querySelector(".img2").setAttribute("src",diceImage);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 wins!";
}
else{
  document.querySelector("h1").innerHTML = "player 2 wins!";
}
