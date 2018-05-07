// conditional

function compareNumbers() {
  var a = Number(prompt("Enter first number"));
  var b = Number(prompt("Enter second number"));
  if(a > b){
    console.log(a);
  } else if(a < b){
    console.log(b);
  } else if (a == b) {
    console.log("equal");
  } else {
    console.log("put in a number");
  }
}

// switch example -- not working yet

function biggerNum() {
  var num1 = Number(prompt("Enter first number"));
  var num2 = Number(prompt("Enter second number"));
  switch (num1,num2) {
    case (num1 > num2):
      console.log(num1);
      break;
    case (num1 < num2):
      console.log(num2);
      break;
    case (num1 == num2):
      console.log("equal");
      break;
    default:
      console.log("enter real numbers");
      break;

  }
}
