/**
* Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
* This time no story, no theory. The examples below show you how to write function accum:
*   accum("abcd") -> "A-Bb-Ccc-Dddd"
*   accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
*   accum("cwAt") -> "C-Ww-Aaa-Tttt"
* The parameter of accum is a string which includes only letters from a..z and A..Z
*/

const accum = s => {
  let answerArray = [];
  const strArray = s.split("");
  
  strArray.forEach((letter, currentIndex) => {
    const currentChar = letter;
    const firstChar = currentChar.toUpperCase();
    const otherChars = repeatChar(currentChar, currentIndex);
    answerArray.push(firstChar + otherChars)
  })
  
  return answerArray.join("-");
}

const repeatChar = (char, num) => {
  let charArray = [];
  let i = 0;
  while (i < num) {
    charArray.push(char.toLowerCase());
    i++;
  }
  return charArray.join("");
} 
