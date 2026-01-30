/**
* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
* Note: a and b are not ordered!
*/

const getSum = (a, b) => {
  if (a === b) { return a };
  if (a > b) { return sumNumInRange(b, a) };
  return sumNumInRange(a, b);
}

const sumNumInRange = (num1, num2) => {
  let sum = 0;
  let i = num1;
  while (i <= num2) {
    sum += i;
    i++;
  }
  return sum;
}
