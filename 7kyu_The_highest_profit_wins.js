/** 
Link: https://www.codewars.com/kata/559590633066759614000063/train/javascript
* Ben has a very simple idea to make some profit: he buys something and sells it again.
* Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price.
* Instead, he's going to buy it for the lowest possible price and sell it at the highest.
* Write a function that returns both the minimum and maximum number of the given list/array.
*/

const minMax = arr => {
  const lowest = arr.sort((a, b) => a - b)[0];
  const highest = arr.sort((a, b) => b - a)[0];
  return [lowest, highest];
}
