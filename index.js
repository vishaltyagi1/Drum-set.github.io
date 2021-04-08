var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (i = 0; i <= numberOfDrumButton; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var tom1=new Audio("Sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2=new Audio("Sounds/tom-2.mp3");
        tom2.play();
      case "s":
        var tom3=new Audio("Sounds/tom-3.mp3");
        tom3.play();
      case "d":
        var tom4=new Audio("Sounds/tom-4.mp3");
        tom4.play();
      case "j":
        var snare=new Audio("Sounds/snare.mp3");
        snare.play();
      case "k":
        var crash=new Audio("Sounds/crash.mp3");
        crash.play();
      case "l":
        var kick-bass=new Audio("Sounds/kick-bass.mp3");
        kick-bass.play();
      default:

    }

  });

}
