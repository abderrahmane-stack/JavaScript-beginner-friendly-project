const display = document.getElementById('display'); 
const buttons = document.querySelectorAll('.btn'); 

let currentInput = '';
let previousInput = ''; 
let operator = ''; 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value'); 
    if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '0';
    } else if (value === '=') {
      if (currentInput && previousInput && operator) {
        const result = calculate(Number(previousInput), Number(currentInput), operator);
        display.textContent = result;
        currentInput = result.toString();
        previousInput = '';
        operator = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      if (value === '.' && currentInput.includes('.')) return; 
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Error';
    default:
      return num2;
  }
}
