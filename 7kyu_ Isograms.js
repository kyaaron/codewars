/**
* Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
* An isogram is a word that has no repeating letters, consecutive or non-consecutive.
* Implement a function that determines whether a string that contains only letters is an isogram.
* Assume the empty string is an isogram. Ignore letter case.
*/

const isIsogram = str => {
  const lowerStr = str.toLowerCase()
  if (lowerStr.length === 0) { return true; }
  if (hasOnlyLetters(lowerStr) && hasNoRepeatingLetters(lowerStr)) {
    return true;
  }
  return false;
}

const hasNoRepeatingLetters = word => {
  const uniqueChars = new Set(word);
  return uniqueChars.size === word.length;
}

const hasOnlyLetters = word => {
  return /^[A-Za-z]+$/.test(word);
}
