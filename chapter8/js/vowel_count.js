function vowelCount() {

  let word = prompt("Enter a word");
  word = word.toLowerCase();

  let vowelNum = 0

  for(let i = 0; i < word.length; i++) {
    if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
      vowelNum++
    }
  }
  return vowelNum;
}
