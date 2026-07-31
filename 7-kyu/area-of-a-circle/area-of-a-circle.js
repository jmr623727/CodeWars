function circleArea(radius) {
  if (radius <=0) {
    throw new Error("Error")
  }
  return Math.PI*(Math.pow(radius, 2));
}
console.log(circleArea(1))