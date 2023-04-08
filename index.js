var random = Math.floor(Math.random()*6)+1;
var diceImage= "dice"+random+".png";
var randomImageSrc =  "images/"+diceImage;
var changeImage = document.querySelectorAll("img")[0];

changeImage.setAttribute("src",randomImageSrc);
//for dice Second
var randomNumber2 = Math.floor(Math.random()*6)+1;

var diceImage2= "images/dice"+randomNumber2+".png";

var changeImageSecond = document.querySelectorAll("img")[1];
changeImageSecond.setAttribute("src",diceImage2);

if(random > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 Won!👨"
}
else if(random === randomNumber2){
    document.querySelector("h1").innerHTML="Draw😒"
}
else{
    document.querySelector("h1").innerHTML="🚩Player2 Won! 👧🏻"
}


