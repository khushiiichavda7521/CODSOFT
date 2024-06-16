

function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
function calculateResult() {
  var display = document.getElementById("display").value;
  var result;
  if (display.includes("+")) {
    var numbers = display.split("+");
    result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
  } else if (display.includes("-")) {
    var numbers = display.split("-");
    result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
  } else if (display.includes("*")) {
    var numbers = display.split("*");
    result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
  } else if (display.includes("/")) {
    var numbers = display.split("/");
    result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
  } else if (display.includes("%")) {
    var numbers = display.split("%");
    result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
  }

  document.getElementById("display").value = result;
}
