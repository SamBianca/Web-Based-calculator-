# 🧮 Web-Based Calculator

A simple, responsive calculator built using **HTML, CSS, and JavaScript**. This project performs basic arithmetic operations and is optimized for mobile and desktop use.


## 📦 Features

- ✅ Basic operations: `+`, `-`, `×`, `÷`, `%`
- ✅ Real-time input display
- ✅ Clear (`C`) and delete (`DEL`) functions
- ✅ Decimal support
- ✅ Responsive layout for mobile devices
- ✅ Color-coded buttons for better UX

---

## 🏗️ Project Structure

### 🔹 HTML
Defines the calculator layout:
- Display screen for input/output
- Button grid for digits and operations
- Semantic button tags with `onclick` handlers

### 🔹 CSS
Styles the calculator interface:
- Grid layout using `grid-template-columns`
- Color-coded buttons:
  - Orange for operators
  - White for digits
  - Green for equals (`=`)
- Hover effects for interactivity
- Mobile-friendly design

### 🔹 JavaScript
Handles calculator logic:
- `appendCharacter(char)`: Adds input to display
- `clearDisplay()`: Resets display to `0`
- `deleteLast()`: Removes last character
- `calculateResult()`: Evaluates expression using `eval()`
- `applyPercent()`: Converts last number to percentage



## ⚙️ How the Percent (%) Button Works

- Converts the **last number** in the expression to its percentage.
  - Example: `50 + 10%` becomes `50 + 0.1`
- If no number is found, divides the **entire expression** by 100.

## 🚀 Getting Started

To run the calculator locally:


# Clone the repository
git clone https://github.com/your-username/web-calculator.git

# Open index.html in your browser

🎨 UI/UX Highlights

- Bold display screen for readability
- Touch-friendly buttons
- Grid completeness with newly added % button
- Smooth transitions and hover feedback

