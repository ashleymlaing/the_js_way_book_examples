function validNum(){
  let num = Number(prompt("Input a number 100 or less"));
  while(num > 100){
    num = Number(prompt("Input a number 100 or less"));
  }
}

function betweenNum(){
  let number = Number(prompt("Input a number 100 or less"));
  if(number > 100){
    while(number > 100){
      number = Number(prompt("Input a number 100 or less"));
    }
  } else if (number < 50) {
    while(number < 50){
      number = Number(prompt("Input a number 100 or less"));
    }
  }
  console.log(number);
}
