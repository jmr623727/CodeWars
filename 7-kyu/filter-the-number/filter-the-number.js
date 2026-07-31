function filterString(str) {
  //Complete this function :
  return +str.match(/\d+/g).join('')
}