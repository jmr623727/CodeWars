// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

// answer

function maxDiff(list) {
    if(list.length === 0 || list.length === 1){return 0}
    
    let result = Math.max(...list) - Math.min(...list)
    return result
  };