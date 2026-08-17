function descendingOrder(n){
  //...
  return parseInt(String(n).split('').sort().reverse().join(''))
  // alt 
//   let arr = []
//   arr.push(n)
//   let newArr = String(arr).split('').sort((a, b) => b - a).join('');
//   return Number(newArr)
}