# Web-Based-calculator-
Functional calculator 

# 🧮 Simple Web-Based Calculator

A clean and responsive calculator built using **HTML**, **CSS**, and **JavaScript**. This project is perfect for beginners who want to learn how these three technologies work together to create interactive web applications.

---

## 📌 Features

- Basic arithmetic operations: **Addition**, **Subtraction**, **Multiplication**, **Division**
- Functional buttons: **Clear (C)**, **Delete (DEL)**, **Decimal (.)**, **Equals (=)**
- Responsive layout using **CSS Grid**
- Error handling for invalid expressions
- Mobile-friendly design with color-coded buttons

---

## 🛠️ Technologies Used

| Language     | Purpose                          |
|--------------|----------------------------------|
| HTML         | Structure of the calculator      |
| CSS          | Styling and layout               |
| JavaScript   | Logic and interactivity          |

---

## 🚀 How to Run

1. **Download or clone** the repository.
2. Open the `index.html` file in any modern web browser.
3. Start calculating!



## 📷 Layout Overview

- Top row: `C`, `/`, `*`, `DEL`
- Middle rows:
  - `7`, `8`, `9`, `-`
  - `4`, `5`, `6`, `+`
  - `1`, `2`, `3`, `.`
- Bottom row: `0`, `=`

---

## 💡 How It Works

- **Display screen** shows the current input or result.
- **Buttons** trigger JavaScript functions:
  - `appendCharacter(char)` → Adds input to the screen
  - `clearDisplay()` → Resets the screen to `0`
  - `deleteLast()` → Removes the last character
  - `calculateResult()` → Evaluates the expression using `eval()`

---

## ⚠️ Note

This calculator uses JavaScript’s built-in `eval()` function for simplicity. In production apps, consider using a safer math parser to avoid security risks.

---

## 🎯 Learning Goals

- Understand how to link HTML, CSS, and JS
- Practice DOM manipulation and event handling
- Build a responsive layout using CSS Grid
- Handle user input and errors gracefully
