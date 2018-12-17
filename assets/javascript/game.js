
var wins = 0;
var losses = 0;
var yourScore = 0;

// Randomizes value for each crystal (between 1 and 12) and the winning number (between 19 and 120)
var ruby = Math.floor((Math.random() * 12) + 1);
var diamond = Math.floor((Math.random() * 12) + 1);
var emerald = Math.floor((Math.random() * 12) + 1);
var sapphire = Math.floor((Math.random() * 12) + 1);
var randomNum = Math.floor((Math.random() * 120) +19);

// When page loads, new random number prints to the html
$(document).ready(function(){
    $("#randomNum").text(randomNum);
})

// When each crystal is clicked, its value is added to yourScore
$("#ruby").on("click", function(){
    yourScore += ruby; 
    $("#yourScore").text(yourScore);
})

$("#diamond").on("click", function(){
    yourScore += diamond; 
    $("#yourScore").text(yourScore);
})

$("#emerald").on("click", function(){
    yourScore += emerald; 
    $("#yourScore").text(yourScore);
})

$("#sapphire").on("click", function(){
    yourScore += sapphire; 
    $("#yourScore").text(yourScore);
})

// if your score = the random number (you won), increase wins +1, randomize the crystal values, reset your score, and set a new random number
$(".crystal").on("click", function(){
    if(yourScore === randomNum){
        wins++;
        $("#wins").text(wins);
        ruby = Math.floor((Math.random() * 12) + 1);
        diamond = Math.floor((Math.random() * 12) + 1);
        emerald = Math.floor((Math.random() * 12) + 1);
        sapphire = Math.floor((Math.random() * 12) + 1);
        randomNum = Math.floor((Math.random() * 120) +19);
        yourScore = 0;
        $("#randomNum").text(randomNum);
        $("#yourScore").text(yourScore);
    // else if your score > random number (you lost), increase losses +1, randomize the crystal values, reset your score, and set a new random number
    }else if(yourScore > randomNum) {
        losses++;
        $("#losses").text(losses);
        ruby = Math.floor((Math.random() * 12) + 1);
        diamond = Math.floor((Math.random() * 12) + 1);
        emerald = Math.floor((Math.random() * 12) + 1);
        sapphire = Math.floor((Math.random() * 12) + 1);
        randomNum = Math.floor((Math.random() * 120) +19);
        yourScore = 0;
        $("#randomNum").text(randomNum);
        $("#yourScore").text(yourScore);
    }

})