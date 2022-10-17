/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// split, reverse, join
function reverseString(text) {
    return text.split('').reverse().join('')
}

// ES6
function reverseString(text) {
    return [...text].reverse().join('')
}

// for loop
function reverseString(text) {
    let result = ''
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
}

// ES6
function reverseString(text) {
    let result = ''
    for (let char of text) {
        result = char + result
    }
    return result
}

// Recursive
function reverseString(text) {
    if (text === '') return ''
    return reverseString5(text.substring(1)) + text[0]
}

// Reduce
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

module.exports = reverseString