function reverseWord(word){
  let wordArray = Array.from(word)
  wordArray.reverse()
  wordArray = wordArray.join("")
  return wordArray
}
