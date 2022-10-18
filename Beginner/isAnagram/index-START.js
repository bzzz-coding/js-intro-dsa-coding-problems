/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

// turn string into obj and compare key:value pairs
function strToObj1(str) {
    let obj = {}
    let strLower = str.toLowerCase()
    for (let char of strLower) {
        obj[char] ? obj[char]++ : obj[char] = 1
    }
    return obj
}

// reduce
function strToObj2(str) {
    return str.split('').reduce((obj, char) => {
        let charLower = char.toLowerCase()
        obj[charLower] ? obj[charLower]++ : obj[charLower] = 1
        return obj 
    }, {})
}

// console.log(strToObj2('tiantian'))


function isAnagram1(stringA, stringB) {
    if (stringA.length !== stringB.length) return false
    let objA = strToObj1(stringA)
    let objB = strToObj1(stringB)
    for (let key in objB) {
        if (objB[key] !== objA[key]) return false
    }
    return true
}

function isAnagram(stringA, stringB) {
    if (stringA.length !== stringB.length) return false
    let objA = strToObj2(stringA)
    let objB = strToObj2(stringB)
    for (let key in objB) {
        if (objB[key] !== objA[key]) return false
    }
    return true
}

// sanitize strings first, then split+sort+join, and compare strings
function isAnagram3(stringA, stringB) {
    const sanitizeString = function (str) {
        // replace any character that is not a letter or a number with ''
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }
    return sanitizeString(stringA) == sanitizeString(stringB)
}

// split+sort+join, and compare strings
function isAnagram4(stringA, stringB) {
    return stringA.split('').sort().join('') === stringB.split('').sort().join('')
}

module.exports = isAnagram