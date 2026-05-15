// calculate the average in an array


//answer
function findAverage(array) {
  // your code here
  if(!array.length){
    return 0
  }
  average = array.reduce((acc, c) => acc + c,0) / array.length
  return average
  
}

findAverage([1,2,3])
