/*
Translate the provided string to Pig Latin by following the rules below:

For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
"pig" = "igpay"
For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
"glove" = "oveglay"
For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
"explain" = "explainway”
*/

// for loop to find first vowel and index, slice the str and add suffix depending on conditions
function pigLatin1(str) {
  const vowels = 'aeiou'
  let suf = ''
  let ind = -1
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (!vowels.includes(char.toLowerCase())) suf += char
    else {
      ind = i
      break
    }
  }
  // if no vowel in word:
  if (ind === -1) return suf + 'ay'
  // else, if the first char is vowel, return str+'way, or slice the str at ind of first vowel, add suf and 'ay'
  return ind === 0 ? str + 'way' : str.slice(ind) + suf + 'ay'
}

// regex - FASTER
function pigLatin2(str) {
  let ind = str.search(/aeiou/i)
  return ind === -1 ? str + 'ay' : str.slice(ind) + str.slice[0, ind] + 'ay'
}


// console.log(pigLatin('pig'))
// console.log(pigLatin('glove'))
// console.log(pigLatin('explain'))
// console.log(pigLatin('psss'))

// Comparing: https://jsbench.me/shl9eqql0n/1