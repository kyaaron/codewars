/**
Link: https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
*/

const deleteNth = (arr,n) => {
  // Create object to track counts
  const countObj = {};
  
  // Filter and return the array based on if count <= n
  return arr.filter(ele => {
    countObj[ele] = (countObj[ele] || 0) + 1;
    return countObj[ele] <= n;
  })
}
