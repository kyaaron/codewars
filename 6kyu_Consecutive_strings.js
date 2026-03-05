/**
Link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
You are given an array(list) strarr of strings and an integer k. Your task is to return the first 
longest string consisting of k consecutive strings taken in the array.
*/

function longestConsec(strarr, k) {
  // Handle edge cases
  if (k <= 0 || strarr === "" || k > strarr.length) { return ""; }
  if (k === 1) { return returnMaxLengthOfElements(strarr); }
  
  let maxLength = 0;
  let maxWordCombo = "";
  
  // Loop through array up to length - k and find max combo of strings
  for (let i = 0; i <= strarr.length - k; i++) {
    const targetStrCombo = returnMultipleElements(strarr, i, k);
    if (targetStrCombo.length > maxLength) { 
      maxLength = targetStrCombo.length; 
      maxWordCombo = targetStrCombo;
    }
  }
  
  return maxWordCombo;
}

// Helper function that returns num indexes of an array of strings
const returnMultipleElements = (arr, index, num) => {
  let i = index;
  let returnedElements = "";
  while (i < index + num) {
    returnedElements += arr[i];
    i++
  }
  return returnedElements;
}

// Helper function to find max length of elements in an array
const returnMaxLengthOfElements = arr => {
  let maxLength = 0;
  let maxLengthEle = "";
  arr.forEach((ele) => {
    if (ele.length > maxLength) {
      maxLength = ele.length;
      maxLengthEle = ele;
    }
  })
  return maxLengthEle;
}
