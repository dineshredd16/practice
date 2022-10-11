var drum_buttons = document.querySelectorAll(".drum")

for (i=0;i<drum_buttons.length; i++) {
    drum_buttons[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        animation(this.innerHTML)
    })
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animation(event.key);
})

function makeSound(key) {
    switch (key){
        case "w":
            new Audio('sounds/crash.mp3').play();
            break;
        case "a":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        case "s":
            new Audio('sounds/snare.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "j":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "k":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "l":
            new Audio('sounds/tom-4.mp3').play();
            break;
        default: console.log(key);
    }
}

function animation(key){
    var button = document.querySelector("."+key);
    array = ["a", "s", "d", "w", "j", "k", "l"]
    if (array.includes(key)){
        button.classList.add("pressed");
        setTimeout(function(){
            button.classList.remove("pressed");
        },100);
    }
}