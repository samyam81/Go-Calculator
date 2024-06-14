// Function to append characters to the result display
function appendCharacter(char) {
  document.getElementById("result").value += char;
}

// Function to clear the result display
function clearResult() {
  document.getElementById("result").value = "";
}

// Function to calculate the result
function calculateResult() {
  const expression = document.getElementById("result").value;
  let result;
  try {
    result = evaluateExpression(expression);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

// Function to evaluate the expression
function evaluateExpression(expression) {
  // Using Function constructor to evaluate expression safely
  return new Function("return " + expression)();
}
