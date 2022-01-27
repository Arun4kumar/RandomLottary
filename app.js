console.log("i am working");

const input = document.getElementById("input");
const button = document.getElementById("button");
const table = document.getElementById("table");

let inputCount = 0;
let won = false;

button.addEventListener("click", () => {
  const userInput = input.value;
  let genValue = 0;
  let status = "Loose";
  inputCount++;
  inputCount %= 10;
  genValue = Math.floor(Math.random() * 100) + 1;
  if (inputCount < 9) {
    if (won == false) {
      if (genValue == userInput) {
        status = "Won";
        won = true;
      }
    } else {
      while (genValue == userInput) {
        genValue = Math.floor(Math.random() * 100) + 1;
      }
      status = "Loose";
    }
  } else {
    if (won == false) {
      genValue = userInput;
      status = "Won";
    } else {
      while (genValue == userInput) {
        genValue = Math.floor(Math.random() * 100) + 1;
      }
      status = "Loose";
      won = false;
    }
  }

  const row = table.insertRow(0);
  var cell = row.insertCell();
  cell.innerHTML = userInput;
  cell.scope = "row";
  cell = row.insertCell();
  cell.innerHTML = genValue;
  cell = row.insertCell();
  if (genValue == userInput) {
  }
  cell.innerHTML = status;
  if (inputCount == 9) {
    const row = table.insertRow(0);
    var cell = row.insertCell();
    cell.innerHTML = "Here Ends 10 Gusses";
  }
});
