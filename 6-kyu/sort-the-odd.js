// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

// answer
// Return a sorted array.
sortArray=(a,b=a.filter(a=>a%2).sort((a,b)=>a-b))=>a.map(a=>a%2?b.shift():a)

console.log(sortArray([5, 3, 2, 8, 1, 4]))

// alternative
// function sortArray(array) {
//     var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
//     return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
//   }