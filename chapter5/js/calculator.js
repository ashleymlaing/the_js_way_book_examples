function calculate(a, oper, b) {
  if (oper == "+") {
    return a + b
  } else if (oper == "-") {
    return a - b
  } else if (oper == "*") {
    return a * b
  } else if (oper == "/") {
    return a / b
  }
}


console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
