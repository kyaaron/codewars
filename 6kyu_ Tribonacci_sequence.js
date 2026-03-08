/**
Link: https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
*/

function tribonacci(signature,n){
  // Taking care of edge cases mentioned in the instructions
  if (n === 0) { return []; }
  if (n === 1) { return [signature[0]]; }
  if (n === 2) { return [signature[0], signature[1]]; }
  if (n === 3) { return signature; }
  
  // Copy signature to start. Loop through and push sum of the last three elements then return the answer
  const answerArray = [...signature];
  for (let i = 3; answerArray.length < n; i++) {
    answerArray.push(sumLastThreeElements(answerArray));
  }
  return answerArray;
}

// Helper function that sums the last three elements of a given array
const sumLastThreeElements = arr => {
  return arr.slice(-3).reduce((acc, ele) => acc + ele);
}
