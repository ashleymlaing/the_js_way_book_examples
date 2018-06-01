// Square the given number x
function square1(x) {
  // TODO: complete the function code
    let answer =  x * x
    return answer
}

// Square the given number x
const square2 = x => x*x // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

function squareUpTo10() {
  for (var i = 0; i < 11; i++) {
    console.log(square2(i));
  }
}
