function smallEnough(a, limit){
  return Math.max(...a) <= limit
}
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))