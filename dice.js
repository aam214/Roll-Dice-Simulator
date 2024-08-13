const buttonRoll = document.getElementById("button-roll");
const diceElement = document.getElementById("dice");

buttonRoll.addEventListener("click", () => {
diceElement.classList.add("roll-animation");
setTimeout(() =>{
  diceElement.classList.remove("roll-animation");
}, 1000);
});