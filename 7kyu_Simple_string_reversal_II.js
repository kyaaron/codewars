function solve(st, a, b){
  const beginningStr = st.split("").slice(0, a).join("");
  const reversedStr = st.split("").slice(a, b+1).reverse().join("");
  const endingStr = st.split("").slice(b+1).join("");
  
  return beginningStr + reversedStr + endingStr;
}
