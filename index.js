// Code your solutions in this file

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(names, event) {
  let arr = [];
  for(let i=0; i<names.length; i++) {
    arr[i] = `Thank you, ${names}, for the wonderful ${event} gift!`
  }
  return arr;
}