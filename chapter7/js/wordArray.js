const words = [];

let input = prompt("Enter a word");


while(input != "stop"){
  words.push(input)
  input = prompt("Enter a word");
}

words.forEach(word => {
  console.log(word);
})
