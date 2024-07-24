// 59. Berilgan massivdan n-chi eng kichik elementni toping.

// function nthSmallest(arr, n) {
//     arr.sort((a,b)=> a - b)
//     let result = []
//     arr.forEach((val, ind) => {
//         if (ind == n - 1 ) {
//             result.push(val)
//         }
//     });
//     return result.join()
// }

// // Test case
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 4)); // Output: 10



// 60. Berilgan sonli massivda eng ko'p takrorlangan elementni toping.

// function mostFrequent(arr) {
//     let maxNum = 0
//     let result

//     for (let i = 0; i < arr.length; i++) {
//         let count = 0
//         for (let g = 0; g < arr.length; g++) {
//             if (arr[i] === arr[g]) {
//                 count++
//             }
//         }

//         if (count > maxNum) {
//             maxNum = count
//             result = arr[i]
//         }

//     }
//     return result

// }

// // Test case
// console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // Output: 1
// console.log(mostFrequent([3, 3, 3, 2, 2, 1])); // Output: 3



// 61. Berilgan harflar qatorida eng ko'p takrorlangan harfni toping.

// function mostFrequentChar(str) {
//         let maxLetter = 0
//         let result

//         for (let i = 0; i < str.length; i++) {
//             let count = 0
//             for (let g = 0; g < str.length; g++) {
//                 if (str[i] == str[g]) {
//                     count++
//                 }
//             }
//             if (count > maxLetter) {
//                 maxLetter = count
//                 result = str[i]
//             }
//         }
//         return result
//  }

//  // Test case
//  console.log(mostFrequentChar("aabbbcccc")); // Output: "c"
//  console.log(mostFrequentChar("abcdabcdabcd")); // Output: "a"



// 62. Berilgan sonli massivdagi eng kichik musbat sonni toping.

// function firstMissingPositive(nums) {
//     let musbatlar = []
//     nums.sort((a,b)=> a - b)
//     nums.forEach(val => {
//         if (val > 0) {
//             musbatlar.push(val)
//         }
//     });
//     return musbatlar[0]
// }

//  // Test case
//  console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 1
//  console.log(firstMissingPositive([1, 2, 0])); // Output: 1



// 63. Berilgan stringdagi barcha harflarni bir qatorga chop eting

// function printCharsInLine(s) {
//     let arr = [...s]
//     console.log(arr.join(" "));
// }

// // Test case
// console.log(printCharsInLine("hello")); // Output: "h e l l o"



// 64. Berilgan stringlar massivida eng uzun o'xshash prefiksni toping.

// function longestCommonPrefix(strs) {

//     let count = ""
//     for (let i = 0; i < strs.length; i++) {
//        for (let g = 0; g < strs.length; g++) {
//          if (strs[0][i] != strs[g][i]) {
//             return count
//          }

//         }
//         count += strs[0][i]

//     }
//     console.log(count);

// }

// // Test case
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""



// 65. Berilgan qator ichidagi arrayda ichidagi sonlar
//  yi’g’indisi yuqori bo’lgan array ni qaytaring

// function maxSumSubmatrix(matrix) {
//   let maxSum = 0;
//   let result = [];

//   for (let i = 0; i < matrix.length; i++) {
//     let total = 0;
//     for (let g = 0; g < matrix[i].length; g++) {
//       total += matrix[i][g];
//     }

//     if (total > maxSum) {
//       maxSum = total;
//       result = matrix[i];
//     }
//   }
//   return result;
// }

// // Test case
// console.log(
//   maxSumSubmatrix([
//     [10, 2, 3],
//     [4, 11, 6],
//     [7, 8, 9],
//   ])
// ); // [7, 8, 9]



// 66. Berilgan ikki massivdagi umumiy elementlarni toping.




// 67. Berilgan sonlar qatorida berilgan yig'indini topuvchi barcha ikkilik juftliklarni toping.

// function twoSumPairs(nums, target) {

//     let result = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let g = i + 1; g < nums.length; g++) {
//             if (nums[i] + nums[g] == target) {
//                 result.push([nums[i], nums[g]])
//             }
//         }
//     }
//     return result
//   }
  
//   // Test case
//   console.log(twoSumPairs([2, 7, 11, 15], 9)); // Output: [[2, 7]]
//   console.log(twoSumPairs([3, 2, 4], 6)); // Output: [[2, 4]]


// 68. Berilgan stringda har bir belgini qanchalik ko'p uchraganini hisoblang.

// function charFrequency(n) {

//     let result = {}
//     let s = n.split("")

//     for(let item of s) {
//         if (result[item]) {
//             result[item]++
//         }else {
//             result[item] = 1    
//         }
//     }
//     return result
// }

// // Test case
// console.log(charFrequency("aabbcc")); // Output: { a: 2, b: 2, c: 2 }
// console.log(charFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }



// 69. Berilgan objectda eng chuqur joylashgan qiymatni toping.

function deepestValue(obj) {
    let arr = [obj.g]
    console.log(arr);
    // for (let i = 0; i < arr.length; i++) {
        
    // }
    
    // obj.flat(Infinity)
}

// Test case
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    }
};
console.log(deepestValue(obj)); // Output: 4
