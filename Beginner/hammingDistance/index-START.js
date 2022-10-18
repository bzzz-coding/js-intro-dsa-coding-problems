/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/



// for loop and tracker -- FASTER
function hammingDistance1(stringA, stringB) {
    if (stringA.length !== stringB.length) return -1
    let result = 0
    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) result++
    }    
    return result
}

// array and filter
function hammingDistance2(stringA, stringB) {
    if (stringA.length !== stringB.length) return -1

    return stringA.split('').filter((char, i) => char !== stringB[i]).length
}

// Comparing: https://jsbench.me/xsl9egtm8y/1

module.exports = hammingDistance