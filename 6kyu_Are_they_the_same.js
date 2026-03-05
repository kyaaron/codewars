/**
Link: https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the 
two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the 
number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, 
regardless of the order.
*/

/* ALGORITHM USED
Return false if array1.length !== array2.length
Loop through array1
Get squareOfCurrentIndex
If squareOfCurrentIndex is in array2, remove it from array2
At the end, if array2.length === 0, return true
Otherwise return false
*/

function comp(array1, array2){
  if (array1 === null || array2 === null) { return false; }
  if (array1.length !== array2.length) { return false; }
  
  array1.forEach((num, index) => {
    const squareOfCurrentIndex = num * num;
    if (array2.includes(squareOfCurrentIndex)) {
      array2.splice(array2.indexOf(squareOfCurrentIndex), 1);
    }
  })

  if (array2.length === 0) { return true; }
  return false;
}
