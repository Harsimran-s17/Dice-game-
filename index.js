let randomVariable1 = Math.floor((Math.random() * 6) + 1);
let randomVariable2 = Math.floor((Math.random() * 6) + 1);


var randomImg1 = "dice" + randomVariable1 + ".png";

var randomImgSrc1 = "images/" + randomImg1;

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);

var randomImg2 = "dice" + randomVariable2 + ".png";

var randomImgSrc2 = "images/" + randomImg2;

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);



// if(randomVariable1 === 1){
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png")
// }else if(randomVariable1 === 2){
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png")
// }else if(randomVariable1 === 3){
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png")
// }else if(randomVariable1 === 4){
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png")
// }else if(randomVariable1 === 5){
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png")
// }else if(randomVariable1 === 6){
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png")
// }

// if(randomVariable2 === 1){
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png")
// }else if(randomVariable2 === 2){
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png")
// }else if(randomVariable2 === 3){
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png")
// }else if(randomVariable2 === 4){
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png")
// }else if(randomVariable2 === 5){
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png")
// }else if(randomVariable2 === 6){
//     document.querySelector(".img2").setAttribute("src", "images/dice6.png")
// }

if(randomVariable1 > randomVariable2){
    document.querySelector("h1").innerHTML = "⛳Player 1 wins"
}else if(randomVariable2 > randomVariable1){
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins⛳"
}else{
    document.querySelector("h1").innerHTML = "It's a Draw"
}
