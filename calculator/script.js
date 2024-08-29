const display = document.getElementById("display");

function moveToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}

function deleteValue() {
  display.value = display.value.toString().slice(0, -1);
}
