/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const vowels = 'aeiou'

// for loop
function vowelsCounter(text) {
    
    let result = 0
    for (let char of text) {
        if (vowels.includes(char.toLowerCase())) {
            result++
        }
    }
    return result
}

// regex
function vowelsCounter2(text) {
    // returns an array of all the matched chars, or null if no match found
    let matched = text.match(/[aeiou]/gi)
    return matched ? matched.length : 0
}

console.log(vowelsCounter('anehizxcv'))
console.log(vowelsCounter('anehIzxcv'))

console.log(vowelsCounter2('anehizxcv'))
console.log(vowelsCounter2('anehIzxcv'))


module.exports = vowelsCounter;
