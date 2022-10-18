/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



// loop through first half, add to string, and compare with second half
function palindromeChecker1(text) {
    let mid = Math.floor(text.length / 2)
    let firstHalf = ''
    let secondHalf = text.slice(-mid).toLowerCase()
    for (let i = 0; i < mid; i++) {
        firstHalf = text[i].toLowerCase() + firstHalf
    }
    return firstHalf === secondHalf
}

// loop through entire word
function palindromeChecker2(text) {
    let reversed = ''
    for (let i = 0; i < text.length; i++) {
        reversed = text[i] + reversed
    }
    return reversed.toLowerCase() === text.toLowerCase()
}

// split, join, reverse - SLOWEST
function palindromeChecker3(text) {
    let reversed = text.toLowerCase().split('').reverse().join('')
    return reversed === text
}

// checking corresponding indices - FASTEST
function palindromeChecker4(text) {
    let len = text.length
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (text[i].toLowerCase() !== text[len - 1 - i]) return false
    }
    return true
}

// comparing: https://jsbench.me/q4l9dkr196/1


console.log(palindromeChecker('racecar'))


module.exports = palindromeChecker;