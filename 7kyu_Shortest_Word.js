/**
* Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
* Simple, given a string of words, return the length of the shortest word(s).
* String will never be empty and you do not need to account for different data types.
*/

const findShort = s => {
  const wordsArray = s.split(" ");
  let shortestWord = wordsArray[0];
  for (let i = 1; i < wordsArray.length; i++) {
    if (wordsArray[i].length < shortestWord.length) { shortestWord = wordsArray[i] }
  }
  return shortestWord.length;
}
