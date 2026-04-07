/**
Link: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
Implement a function that computes the difference between two lists. 
The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). 
The order of elements in the first list should be preserved in the result.
*/

const arrayDiff = (a, b) => {
  const uniqueArray = [];
  a.forEach((ele, i) => {
    if (!b.includes(ele)) { uniqueArray.push(ele) }
  })
  return uniqueArray;
}
