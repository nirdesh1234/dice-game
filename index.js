

var x = Math.floor(Math.random() * 6) + 1;
var image1 = "images/dice" + x + ".png";
var y = Math.floor(Math.random() * 6) + 1;
var image2 = "images/dice" + y + ".png";
document.querySelector(".img1").setAttribute("src", image1); 
document.querySelector(".img2").setAttribute("src", image2);


if(x>y)
{
    document.querySelector("h1").innerHTML="🚩player1 wins";
}

else if(x<y)
{
    document.querySelector("h1").innerHTML="player2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}