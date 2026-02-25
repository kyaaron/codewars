/**
* Link: https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
* Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
* `a` and `b` will both be positive integers, and `a` will always be the first number in the operation, and `b` always the second.
* The four operators are "add", "subtract", "divide", "multiply".
* Try to do it without using if statements!
*/

function arithmetic(a, b, operator){
  const opType = arguments[2];
  switch(opType) {
    case "add":
      return a + b;
      break;
    case "subtract":
      return a - b;
      break;
    case "multiply":
      return a * b;
      break;
    case "divide":
      return a / b;
      break;
    default:
      console.log("Incorrect operator type, try again.");
  }
}
