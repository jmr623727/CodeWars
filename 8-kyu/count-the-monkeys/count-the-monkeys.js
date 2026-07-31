function monkeyCount(n) {
// your code here
  const result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result.reverse();
  
}
console.log(monkeyCount(5))