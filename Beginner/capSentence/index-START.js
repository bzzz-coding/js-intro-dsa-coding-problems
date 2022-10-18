/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



// for loop, check for empty space
function capSentence1(text) {
  let result = text[0].toUpperCase()
  for (let i = 1; i < text.length; i++) {
    console.log(text[i-1], text[i])
    if (text[i-1] === ' ' && text[i] !== ' ') result += text[i].toUpperCase()
    else result += text[i].toLowerCase()
  }
  return result
}

// lowercase text first, for loop
function capSentence2(text) {
  text = text.toLowerCase()
  let result = text[0].toUpperCase()
  for (let i = 1; i < text.length; i++) {
    console.log(text[i-1], text[i])
    if (text[i-1] === ' ' && text[i] !== ' ') result += text[i].toUpperCase()
    else result += text[i]
  }
  return result
}


// split into array and then map
function capSentence3(text) {
  let arr = text.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  return arr.join(' ')
}

// lowercase, split into array and then map
function capSentence4(text) {
  let arr = text.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1))
  return arr.join(' ')
}


// split into array and replace first char 
function capSentence5(text) {
  let arr = text.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase()))
  return arr.join(' ')
}

// forEach
function capSentence6(text) {
  let result = ''
  let arr = text.toLowerCase().split(' ').forEach(word => result += (word[0].toUpperCase() + word.slice(1) + ' '))
  return result
}

// tutorial solution 1 with forEach
function capSentence7(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = []

  wordsArray.forEach(word => {
      capsArray.push(word[0].toUpperCase() + word.slice(1))
  });

  return capsArray.join(' ')
}

// tutorial solution 2 with map
function capSentence8(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word=>{
      return word[0].toUpperCase() + word.slice(1)
  })
  return capsArray.join(' ')
}

// split into array and then for loop - FASTEST
function capSentence9(text) {
  let arr = text.split(' ')
  let result = ''
  for (let word in arr) {
    result += (word[0].toUpperCase() + word.slice(1).toLowerCase())
  }
  return result
}

// same as above except convert to lowercase first - much slower
function capSentence10(text) {
  let arr = text.toLowerCase().split(' ')
  let result = ''
  for (let word in arr) {
    result += (word[0].toUpperCase() + word.slice(1))
  }
  return result
}

// Comparing: https://jsbench.me/j0l9djcnpk/1

console.log(capSentence('the tales of scotch!'))



module.exports = capSentence