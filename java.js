document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");
  let clearButton = document.getElementById("clear");
  let equalsButton = document.getElementById("equals");
  let buttons = Array.from(document.querySelectorAll(".btn"));

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.dataset.value) {
        display.value += button.dataset.value;
      }
    });
  });

  clearButton.addEventListener("click", function () {
    display.value = "";
  });

    equalsButton.addEventListener("click", function () {
        display.value = eval(display.value);
  
     
  });
});
