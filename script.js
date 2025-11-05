const display = document.getElementById('display');

function appendCharacter(char) {
  if (display.innerText === '0') {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === '' || display.innerText === '-') {
    display.innerText = '0';
  }
}

function applyPercent() {
  let expr = display.innerText;

  // If display is just 0 or Error, do nothing useful
  if (!expr || expr === '0' || expr === 'Error') return;

  // Find the last number in the expression (including decimals)
  // Regex: match the last sequence of digits and optional decimal point
  const match = expr.match(/(-?\d+\.?\d*)$/);
  if (match) {
    const lastNumber = match[1];
    const percentValue = String(Number(lastNumber) / 100);
    // Replace only the last occurrence (the matched last number) with percentValue
    expr = expr.slice(0, match.index) + percentValue;
    display.innerText = expr;
  } else {
    // If no plain number at end (e.g., ends with operator), treat as dividing full value by 100
    try {
      const val = evaluateExpression(display.innerText);
      display.innerText = String(val / 100);
    } catch (e) {
      display.innerText = 'Error';
    }
  }
}

function calculateResult() {
  try {
    display.innerText = String(evaluateExpression(display.innerText));
  } catch (error) {
    display.innerText = 'Error';
  }
}

// Helper to safely evaluate expressions that may use × and ÷
function evaluateExpression(input) {
  if (!input || input === '') return 0;
  // Replace visual operators with JS operators
  const sanitized = input.replace(/×/g, '*').replace(/÷/g, '/');

  // Prevent accidental trailing operators from causing syntax errors
  const cleaned = sanitized.replace(/[^0-9.+\-*/()%]/g, '');

  // Use eval carefully: cleaned expression only contains numbers and operators
  // Note: for production consider a proper parser instead of eval
  return eval(cleaned);
}