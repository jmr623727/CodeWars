function smallEnough(a, limit){
  return Math.max(...a) <= limit

  // alternative efficient for memory
  // return a.every(x => x <= limit);
}
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
