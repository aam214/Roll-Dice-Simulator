const buttonRoll = document.getElementById("button-roll");
const diceElement = document.getElementById("dice");


function diceResult(){
const diceNumber = Math.floor(Math.random() * 6) + 1;
  
const diceChange =getDiceChange(diceNumber);
}

function getDiceChange(diceNumber){
  switch(diceNumber){
  case 1:
     return "&#9856;";

  case 2:
     return "&#9857;";

  case 3:
      return "&#9858;";
       
    case 4:
      return "&#9859;";
         
    case 5:
      return "&#9860;";
      
    case 6:
      return "&#9861;";
}
}

buttonRoll.addEventListener("click", () => {
diceElement.classList.add("roll-animation");
setTimeout(() =>{
  diceElement.classList.remove("roll-animation");
  diceResult();
}, 2000);
});