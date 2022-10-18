/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


// reduce, for...in object
function maxRecurringChar1(text) {
    let obj = [...text].reduce((obj, char) => {
        obj[char] ? obj[char]++ : obj[char] = 1
        return obj
    }, {})

    let occurrance = 0
    let result

    for (let key in obj) {
        if (obj[key] > occurrance) {
            occurrance = obj[key]
            result = key
        }
    }

    return result
}

// for loop, for...in object - FASTEST
function maxRecurringChar2(text) {
    let obj = {}
    for (let char of text) {
        obj[char] ? obj[char]++ : obj[char] = 1
    }

    let occurrance = 0
    let result

    for (let key in obj) {
        if (obj[key] > occurrance) {
            occurrance = obj[key]
            result = key
        }
    }

    return result
}

// for loop, using object orders
function maxRecurringChar3(text) {
    let obj = {}
    for (let char of text) {
        obj[char] ? obj[char]++ : obj[char] = 1
    }

    let valuesArr = Object.values(obj)
    let keysArr = Object.keys(obj)
    return keysArr[valuesArr.indexOf(Math.max(...valuesArr))]
}

// solution 1 from tutorial - for loop + for in object
function maxRecurringChar4(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

// solution 2 from tutorial - SLOWEST
function maxRecurringChar5(text) {
    let charMap = {}
    let charArray =[]
    let vaulesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap)
    vaulesArray = Object.values(charMap)
    maxCharValue = Math.max(...vaulesArray)

    return charArray[vaulesArray.indexOf(maxCharValue)]
}


console.log(maxRecurringChar('aabacada'))

// Comparing: https://jsbench.me/vcl9dhfjty/1 

module.exports = maxRecurringChar;