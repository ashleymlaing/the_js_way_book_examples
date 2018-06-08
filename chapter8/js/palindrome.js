function palindrome(word) {
  let wordInput = Array.from(word.toLowerCase())
  for (let i = 0; i < wordInput.length; i++) {
    if(wordInput[i] == " "){
      wordInput.splice(i,1)
    }
  }
  //return wordInput;
  wordInput = wordInput.join("")
  return wordInput;


}
