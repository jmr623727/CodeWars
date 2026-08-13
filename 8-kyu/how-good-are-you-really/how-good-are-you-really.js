function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  return classPoints.reduce((a, b) => a + b) / classPoints.length < yourPoints ? true : false ;
}
​