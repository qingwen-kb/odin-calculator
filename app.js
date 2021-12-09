const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  if (a == null) {
    return b;
  }
  return a - b;
}
function multiply(a, b) {
  if (a == null) {
    return b;
  }
  return a * b;
}
function divide(a, b) {
  if (a == null) {
    return b;
  }
  return a / b;
}

function operate(operator, a, b) {
  console.log(operator, a, b);
  switch (operator) {
    case "add":
      return add(a, b);
      break;
    case "subtract":
      return subtract(a, b);
      break;
    case "multiply":
      return multiply(a, b);
      break;
    case "divide":
      return divide(a, b);
      break;
  }
}

const data = {
  operator: null,
  firstValue: null,
  secondValue: null,
  result: null,
};

let operatorPress = true;

btn.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList[1] === "number") {
      if (operatorPress) {
        display.value = "";
      }
      operatorPress = false;
      display.value += event.target.value;
    } else if (event.target.classList[1] === "operator") {
      operatorPress = true;
      if (event.target.value !== "equal") {
        data["secondValue"] = parseFloat(display.value);
        data["firstValue"] = data["result"];
        data["operator"] = event.target.value;
        data["result"] = operate(
          data["operator"],
          data["firstValue"],
          data["secondValue"]
        );
        display.value = data["result"];
        console.log(data);
      } else {
        data["secondValue"] = parseFloat(display.value);
        data["firstValue"] = data["result"];
        data["result"] = operate(
          data["operator"],
          data["firstValue"],
          data["secondValue"]
        );
        console.log(data);
        display.value = data["result"];
        data["result"] = null;
      }
    }
    if (event.target.value === "cancel") {
      data["operator"] = null;
      data["value"] = null;
      data["result"] = null;
      display.value = "";
    }
  });
});
if (operatorPress) {
  display.value = data["result"];
}
