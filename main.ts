/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-12-10
* @fileoverview this program will 
*/
// Calculator Program - Grade 11 Level
// Simple Calculator Program using prompt() and alert()

const menu =
  "Welcome to my calculator program.\n" +
  "Which operation would you like to perform today?\n" +
  "a. add\n" +
  "b. subtract\n" +
  "c. multiply\n" +
  "d. divide\n" +
  "e. absolute value\n" +
  "f. round\n" +
  "g. raise to an exponent\n" +
  "h. square root\n";

const choice = prompt(menu + "\nWhat operation do you want to choose:");

// ADD
if (choice === "a") {
  const num1 = Number(prompt("Enter the first number:"));
  const num2 = Number(prompt("Enter the second number:"));
  alert(num1 + " + " + num2 + " = " + (num1 + num2));
}

// SUBTRACT
else if (choice === "b") {
  const num1 = Number(prompt("Enter the first number:"));
  const num2 = Number(prompt("Enter the second number:"));
  alert(num1 + " - " + num2 + " = " + (num1 - num2));
}

// MULTIPLY
else if (choice === "c") {
  const num1 = Number(prompt("Enter the first number:"));
  const num2 = Number(prompt("Enter the second number:"));
  alert(num1 + " * " + num2 + " = " + (num1 * num2));
}

// DIVIDE
else if (choice === "d") {
  const num1 = Number(prompt("Enter the numerator:"));
  const num2 = Number(prompt("Enter the divisor (not 0):"));
  alert(num1 + " / " + num2 + " = " + (num1 / num2));
}

// ABSOLUTE VALUE
else if (choice === "e") {
  const num = Number(prompt("Enter a number:"));
  alert("The absolute value of " + num + " is " + Math.abs(num));
}

// ROUND
else if (choice === "f") {
  const num = Number(prompt("Enter a number to round:"));
  alert(num + " rounded is " + Math.round(num));
}

// EXPONENT
else if (choice === "g") {
  const base = Number(prompt("Enter the base number:"));
  const power = Number(prompt("Enter the exponent:"));
  alert(base + " raised to the power of " + power + " is " + Math.pow(base, power));
}

// SQUARE ROOT
else if (choice === "h") {
  const num = Number(prompt("Enter a non-negative number:"));
  alert("The square root of " + num + " is " + Math.sqrt(num));
}

// INVALID CHOICE
else {
  alert("That is not a valid option.");
}
