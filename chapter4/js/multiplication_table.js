function multTable(){
  let num = Number(prompt("input a number"))
  for(let i = 0; i <=12; i++){
    let answer = i * num
    console.log(`${i} * ${num} = ${answer}`)
  }
}

function betweenTable(){
  let num = Number(prompt("Enter a number between 2 and 9"))

  if(num < 2 || num > 9) {
    while(num < 2 || num > 9) {
        num = Number(prompt("Enter a number between 2 and 9"))
    }
  }

  for(let i = 0; i <=12; i++){
    let answer = i * num
    console.log(`${i} * ${num} = ${answer}`)
  }

}
