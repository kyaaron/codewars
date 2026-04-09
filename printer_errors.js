/**
Link: https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
*/
const printerError = s => {
  const controlChars = "abcdefghijklm";
  const stringLength = s.length;
  let count = 0;
  
  s.split("").forEach(ele => { if (!controlChars.includes(ele)) { count++ } })
  
  return `${count}/${stringLength}`;
}
