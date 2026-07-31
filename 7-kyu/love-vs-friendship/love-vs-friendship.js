function wordsToMarks(str){
return str.split('').reduce((acc, char) => {
    return acc + char.charCodeAt() - 96;
  }, 0);
}
​