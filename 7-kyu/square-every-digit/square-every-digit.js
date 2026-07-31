function squareDigits(num){
  let arr = []
  arr.push(num)
  let newArr = String(arr).split('').map((nums) => nums ** 2).join('');
  return Number(newArr)
}
console.log(squareDigits(9119))