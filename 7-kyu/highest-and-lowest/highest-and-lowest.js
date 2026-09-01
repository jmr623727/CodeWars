function highAndLow(num){
  numbers = num.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
​