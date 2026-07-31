function solve(s){
  let numUpper = (s.match(/[A-Z]/g) || []).length;
  let numLower = (s.match(/[a-z]/g) || []).length;
  
  if(numUpper > numLower){
    return s.toUpperCase()
  }
  if(numLower > numUpper){
    return s.toLowerCase()
  }
    return s.toLowerCase()
}