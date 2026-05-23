function friend(friends){
  //your code here
      return friends.filter(c => c.length === 4)
}
console.log(friend(["Ryan", "Kieran", "Mark"]))