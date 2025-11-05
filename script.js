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
  if (display.innerText === '') {
    display.innerText = '0';
  }
}

function calculateResult() {
  try {
    display.innerText = String(eval(display.innerText));
  } catch (error) {
    display.innerText = 'Error';
  }
}