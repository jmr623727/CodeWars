function getMiddle(s) {
  if(s.length % 2 === 0){
    return s.slice(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
  }
  if(s.length % 2 === 1){
    return s.charAt(Math.floor(s.length / 2))
  }
}