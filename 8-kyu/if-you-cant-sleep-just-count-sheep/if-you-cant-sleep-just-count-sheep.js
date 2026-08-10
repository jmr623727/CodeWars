function countSheep(c){
  //your code here
  let murmur = '';
  for(let i= 1; i <= c; i++){
   murmur += i + ' sheep...'
 }
  return murmur;
}
console.log(countSheep(3))