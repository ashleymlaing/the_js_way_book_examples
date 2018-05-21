//need help

function neitherYesOrNo() {
  let word = prompt("Enter a word")
  word = word.toLowerCase()
  console.log(word)
  while(word != "no" || word != "yes"){
    word = prompt("Enter a word")
    word = word.toLowerCase()
    console.log(word)
  }
}
