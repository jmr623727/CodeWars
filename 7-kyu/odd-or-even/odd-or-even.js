function oddOrEven(arr) {
   //enter code here
  let result = arr.reduce((acc, c) => acc + c, 0)
  if(result % 2 === 1){
    return 'odd'
  }
  else if(result % 2 === 0){
    return 'even'
  }
  else{
    return 'odd'
  }
   // alternative
   // return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}
​
console.log(oddOrEven([0,1,5]))
​
// return arr.reduce((acc, c) => {
//     return c % 3 ? acc + c: acc
//   }, 0)
​
