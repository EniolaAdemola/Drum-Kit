let buttonsClick = document.querySelectorAll(".drum");

// Detecting Button Press
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){

    buttonsClick[i].addEventListener("click", function () {
       let buttonInnerHTML = this.innerHTML;
         makeSound(buttonInnerHTML);

       buttonAnimation(buttonInnerHTML);
    });
};

//detecting key press
document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){
    
        switch (key) {
            case "w":
                  let snare = new Audio("sounds/snare.mp3");
                  snare.play();
                break;

            case "a":
                  let tom1 = new Audio("sounds/tom-1.mp3");
                  tom1.play();
                break;

            case "s":
                  let tom2 = new Audio("sounds/tom-2.mp3");
                  tom2.play();
                break;

            case "d":
                 let tom3 = new Audio("sounds/tom-3.mp3");
                  tom3.play();
                break;

            case "j":
                  let tom4 = new Audio("sounds/tom-4.mp3");
                  tom4.play();
                break;

            case "k":
                  let kick = new Audio("sounds/kick-bass.mp3");
                  kick.play();
                break;  
                  
             case "l":
                  let crash = new Audio("sounds/crash.mp3");
                  crash.play();
                break;    
            default:
                  console.log(buttonInnerHTML);
                break;
        }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

    setTimeout(function(){
       activeButton.classList.remove("pressed");
    }, 100);
}