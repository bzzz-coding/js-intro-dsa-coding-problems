/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// for loop - FASTER
function chunkArray1(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i+size))
    }

    return result
}

// recursion
function chunkArray2(array, size) {
    if (array.length <= size) {
        return [array]
    }
    return [array.slice(0,size), ...chunkArray2(array.slice(size), size)]
}


// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))

// Comparing: https://jsbench.me/cql9fy926r/1

module.exports = chunkArray