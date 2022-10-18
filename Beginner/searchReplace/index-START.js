/*
Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence.

Example:
searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"
*/

function caseMatching1(word, newWord) {
  if (word === word.toUpperCase()) return newWord.toUpperCase()
  if (word[0] === word[0].toUpperCase()) return newWord[0].toUpperCase() + newWord.slice(1).toLowerCase()
  return newWord.toLowerCase()
}


function searchReplace(str, word, newWord) {
  newWord = caseMatching1(word, newWord)

  return str.replace(word, newWord)
}




module.exports = searchReplace