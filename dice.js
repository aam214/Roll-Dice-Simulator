const buttonRoll = document.getElementById("button-roll");
const diceElement = document.getElementById("dice");
const history = document.getElementById("history");

let historyList =[];

buttonRoll.addEventListener("click", () => {
  diceElement.classList.add("roll-animation");
  setTimeout(() => {
    diceElement.classList.remove("roll-animation");
    diceResult();
  }, 1000);
  });
function diceResult() {
const diceNumber = Math.floor(Math.random() * 6) + 1;
const diceChange = getDiceChange(diceNumber);
diceElement.innerHTML = diceChange;
historyList.push(diceNumber);
updateHistory();
}

function updateHistory(){
history.innerHTML = "";
for (let i = 0; i < historyList.length; i++) {
const makeList = document.createElement("li");
makeList.innerHTML = `Roll ${i +1} : 
<span class="list-dice">${getDiceChange(historyList[i])}</span>`;
history.appendChild(makeList);
}
}

function getDiceChange(diceNumber) {
  switch(diceNumber) {
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
    
      default: 
      return "";
}
}

