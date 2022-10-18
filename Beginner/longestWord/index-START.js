/* CHALLENGE
Given a sentence, return the longest word in the string.
*/


// track maxLen and longest word and use for loop
function longestWord1(text) {
    let maxLen = 0,
        longest
    let arr = text.split(' ')
    console.log(arr)
    for (let word of arr) {
        let currentLen = word.length
        if (currentLen > maxLen) {
            maxLen = currentLen
            longest = word
        }
        // console.log(maxLen, longest)
    }
    return longest
}

// use Map and Math.max
function longestWord2(text) {
    let arr = text.split(' ')
    let arrOfLen = arr.map(word => word.length)
    console.log(arrOfLen)
    return arr[arrOfLen.indexOf(Math.max(...arrOfLen))]
}

// use sort
function longestWord3(text) {
    let arr = text.split(' ')
    let sorted = arr.sort((a, b) => b.length - a.length)
    return arr[0]
}

// use reduce - FASTEST
function longestWord4(text) {
    let arr = text.split(' ')
    let word = arr.reduce((acc, current) => {
        if (current.length > acc.length) {
            acc = current
        }
        return acc
    }, '')
    return word
}

// console.log(longestWord('Top Shelf Web Development Training on Scotch'))

// Comparing: https://jsbench.me/14l9ehqt7p/1

module.exports = longestWord