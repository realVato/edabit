// 1. Return the Remainder from Two Numbers

// function remainder(x, y) {
//     return x % y
// }

// Area of a Triangle

// function triArea(base, height) {
//     return (base * height) / 2
// }

// The Farm Problem

// function animals(chickens, cows, pigs) {
//     var chickensLegs = chickens * 2
//     var cowsLegs = cows * 4
//     var pigsLegs = pigs * 4
//     return chickensLegs + cowsLegs + pigsLegs
// }

// Find the Largest Number in an Array

// function findLargestNum(arr) {
//     return Math.max.apply(null, arr)
// }

// Count Syllables

// function numberSyllables(word) {
//     var stringify = word.split('-')
//     return stringify.length
// }

// Convert Hours and Minutes into Seconds

// function convert(hours, minutes) {
//     var hoursToSec = (hours * 60) * 60
//     var minutesToSec = minutes * 60
//     return hoursToSec + minutesToSec
// }

// Difference of Max and Min Numbers in Array

// function diffMaxMin(arr) {
//     var min = Math.min(...arr)
//     var max = Math.max(...arr)
//     return max - min
// }

// Convert Number to Corresponding Month Name

// function monthName(num) {
//     var months = ['January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December'
//     ]
//     return months[num - 1]
// }

// Convert Number to String of Dashes

// function Go(num) {
//     var dash = '-'
//     return dash.repeat(num)
// }

// Remove Null from an Array

// function removeNull(arr) {
//     var filtered = arr.filter(noNull => noNull !== null)
//     return filtered
// }

// Fix the Error: Vowel Edition

// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '')
// }

// Filter out Strings from an Array

// function filterArray(arr) {
//     var filtered = arr.filter(noString => typeof noString !== 'string')
//     return filtered
// }


// Sum of Cubes

// function sumOfCubes(nums) {
//     var reducer = (accumulator, currentValue) => accumulator + currentValue
//     var arrPow = nums.map(sum => Math.pow(sum, 3))
//     var reduced = arrPow.reduce(reducer, 0)

//     return reduced
// }

// Absolute Sum

// function getAbsSum(arr) {

//     var reducer = (total, sum) => total + sum
//     var absNumber = arr.map(num => Math.abs(num))
//     var reduced = absNumber.reduce(reducer)

//     return reduced
// }

// Chat Room Status

// function chatroomStatus(users) {
//     if (users.length == 0) {
//         return 'no one online'
//     } else if (users.length == 1) {
//         return `${users[0]} online`
//     } else if (users.length == 2) {
//         return `${users[0]} and ${users[1]} online`
//     } else if (users.length > 2) {
//         return `${users[0]}, ${users[1]} and ${users.length - 2} more online`
//     }

//     return
// }

// Secret Society

// function societyName(friends) {
//     var sorted = friends.sort()
//     var grpName = sorted.map(name => name[0]).join('')
//     return grpName
// }