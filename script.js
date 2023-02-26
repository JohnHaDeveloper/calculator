function addToDisplay(value) {
  let displayValue = document.getElementById("display").value;
  if (value === "." && displayValue.includes(".")) {
    return;
  }
    
  document.getElementById("display").value += value;
}

  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function calculate() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
  }
  
  // Add keyboard support
  document.addEventListener("keydown", function(event) {
    let keyPressed = event.key;
    if (/^[0-9]$/.test(keyPressed)) {
      addToDisplay(keyPressed);
    } else if (keyPressed === ".") {
      addToDisplay(".");
    } else if (/^[\+\-\*\/]$/.test(keyPressed)) {
      addToDisplay(keyPressed);
    } else if (keyPressed === "Enter") {
      calculate();
    } else if (keyPressed === "Escape") {
      clearDisplay();
    }
  });
  
  // Add visual effect to button on click
  let buttons = document.querySelectorAll(".button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      this.classList.add("clicked");
      setTimeout(() => {
        this.classList.remove("clicked");
      }, 100);
    });
  }
  
