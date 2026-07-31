const reverseSeq = n => {
  return Array.from({ length: n }, (_, index) => n - index);
  
  //alt
//   function countdown(n) {
//   const result = [];
//   for (let i = n; i > 0; i--) {
//     result.push(i);
//   }
//   return result;
//   }
​
};