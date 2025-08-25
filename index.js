var drumLength = document.querySelectorAll(".drum").length;
var pianoLength = document.querySelectorAll(".piano-key").length;

var activeInstrument = window.location.pathname.includes("piano.html") 
    ? "Piano" 
    : "Drum Kit";

$(".instrument").on("click", function() {
    var clickedInstrument = $(this).text().trim();
    
    // Set activeInstrument to the opposite
    if (clickedInstrument === "Piano") {
        activeInstrument = "Drum Kit";
    } else if (clickedInstrument === "Drum Kit") {
        activeInstrument = "Piano";
    }
});

for (let index = 0; index < drumLength; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeDrumSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    if (activeInstrument === 'Piano') {
        makePianoSound(key);
    } 
    else if (activeInstrument === 'Drum Kit') {
        makeDrumSound(key);
    }
    buttonAnimation(key);
});

function makeDrumSound(key) {
    switch(key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log("Not a correct key");
    }
}

for (let index = 0; index < pianoLength; index++) {
    document.querySelectorAll(".piano-key")[index].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        makePianoSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

function makePianoSound(key) {
    switch(key) {
        case "a":
            var c4 = new Audio("sounds/C4.mp3");
            c4.play();
            break;
        case "w":
            var db4 = new Audio("sounds/Db4.mp3");
            db4.play();
            break;
        case "s":
            var d4 = new Audio("sounds/D4.mp3");
            d4.play();
            break;
        case "e":
            var eb4 = new Audio("sounds/Eb4.mp3");
            eb4.play();
            break;
        case "d":
            var e4 = new Audio("sounds/E4.mp3");
            e4.play();
            break;
        case "f":
            var f4 = new Audio("sounds/F4.mp3");
            f4.play();
            break;
        case "t":
            var gb4 = new Audio("sounds/Gb4.mp3");
            gb4.play();
            break;
        case "g":
            var g4 = new Audio("sounds/G4.mp3");
            g4.play();
            break;
        case "y":
            var ab4 = new Audio("sounds/Ab4.mp3");
            ab4.play();
            break;
        case "h":
            var a4 = new Audio("sounds/A4.mp3");
            a4.play();
            break;
        case "u":
            var bb4 = new Audio("sounds/Bb4.mp3");
            bb4.play();
            break;
        case "j":
            var b4 = new Audio("sounds/B4.mp3");
            b4.play();
            break;
        default: console.log("Not a correct key");
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}