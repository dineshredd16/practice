function randomNumber(){
    var random = Math.ceil(Math.random() * 6);
    return random
}

var num1 = randomNumber();
var num2 = randomNumber();

document.querySelector(".container .dice .img1").setAttribute("src", 'images/dice'+num1+'.png')
document.querySelector(".container .dice .img2").setAttribute("src", 'images/dice'+num2+'.png')

if (num1 > num2) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins";
}
else if (num1 < num2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins 🚩";
}
else  {
    document.querySelector(".container h1").innerHTML = "It's a Draw";
}