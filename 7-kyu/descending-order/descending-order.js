function descendingOrder(n){
  //...
  let arr = []
  arr.push(n)
  let newArr = String(arr).split('').sort((a, b) => b - a).join('');
  return Number(newArr)
}
console.log(descendingOrder(15))