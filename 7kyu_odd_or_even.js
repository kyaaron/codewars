/**
* Link: https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
* Given a list of integers, determine whether the sum of its elements is odd or even.
* Give your answer as a string matching "odd" or "even".
* If the input array is empty consider it as: [0] (array with a zero).
* Have fun!
*/

const oddOrEven = array => {
  if (array.length === 1 && array[0] === 0) { return "even" };
  if (array.length === 0) { return "even" };
  
  const arraySum = array.reduce((acc, ele) => acc + ele);
  if (Math.abs(arraySum) % 2 === 0) { return "even" };
  return "odd";
}
