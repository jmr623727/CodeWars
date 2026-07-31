function inAscOrder(arr) {
  return arr.slice(1).every((x, i) => x >= arr[i]);
​
//   alt
//   for(let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i+1]) {
//       return false; 
//     }
//   }
//   return true;
}
​