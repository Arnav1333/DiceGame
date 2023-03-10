var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randoDiceImage= "dice" + randomNumber1 + ".png";
var randomImageSource= "images/" + randoDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var randoDiceImage= "dice" + randomNumber2 + ".png";
var randomImageSource2= "images/" + randoDiceImage;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🏆Player1 Wins!!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🏆Player2 Wins!!";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw";
}