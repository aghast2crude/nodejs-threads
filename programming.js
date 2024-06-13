// console.log("Hello, World!");

// find the max number of elements which are greater than one and itself in the given Array

// const arr = [1,6,5,3,10,10,10,10,5,7,9,4,6,2,5,15,15,15,1,0,15];
// let count = 0;
// let max_value = arr[0];
// let max_value_temp_count=0;
// for (let i=0; i<arr.length; i++) {
//   if (max_value < arr[i]) {
//     console.log('arr index value', arr[i], 'count value', count, ', max_value_temp_count: ', max_value_temp_count)
//     max_value = arr[i];
//     count = count+max_value_temp_count;
//     max_value_temp_count = 1;
//   } else {
//     if (arr[i] == max_value) {
//       max_value_temp_count++
//       continue;
//     }
//     count++
//   }
// }

// console.log('count: ', count, ', max_value_temp_count: ', max_value_temp_count, ', arr length: ', arr.length)

// for (let i=0; i<arr.length; i++) {
//   if (max_value < arr[i]) {
//     max_value = arr[i];
//     count=0;
//   }
//   if (max_value == arr[i]) {
//     count++
//   }
// }

// console.log('count value: ', count)

let script1 = require("./script1");
const arr = [1, 5, 3, 10, 7, 9, 4, 6, 2];
// script1.findSumOfTwoNumInArr(arr, 17);
// const reversedArr = script1.reverseAnArray(arr, 2, 6);
// console.log('reveresedArr', reversedArr)

const rotatedArr = script1.rotateAnArrayKTimes(arr, 4);
console.log("rotatedArr", rotatedArr);

/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 */

function findSumOfTwoNumInArr(arr, sum) {
  let obj = {};
  let currentIndex = 0;
  let storedIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = sum - arr[i];
    if (obj[arr[i]] !== undefined) {
      currentIndex = i;
      storedIndex = obj[arr[i]];
    } else {
      obj[temp] = i;
    }
  }

  console.log("storedIndex: ", storedIndex, ", currentIndex: ", currentIndex);
  console.log("The indexes are: ", storedIndex + ", " + currentIndex);
}

function reverseAnArray(arr, start, end) {
  const N = arr.length;
  let i = start;
  let j = end;
  while (i < j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i++;
    j--;
  }
  return arr;
}

function rotateAnArrayKTimes(arr, k) {
  let reversedArr = reverseAnArray(arr, 0, arr.length - 1);
  reversedArr = reverseAnArray(reversedArr, 0, k - 1);
  reversedArr = reverseAnArray(reversedArr, k, arr.length - 1);
  return reversedArr;
}
module.exports = { findSumOfTwoNumInArr, reverseAnArray, rotateAnArrayKTimes };

// Finding the longest substring in a string
// that is a palindrome.
// Input: "babad"
// Output: "bab"

let longStr = 0;
let str = "babad";
for (let i = 0; i < str.length; i++) {
  for (let j = str.length - 1; j > 0; j--) {
    if (findPallindrome(i, j)) {
      longStr =
        str.substring(i, j).length > longStr ? str.substring(i, j) : longStr;
    }
  }
}
console.log(longStr);

function findPallindrome(startIndex, endIndex) {
  let tempStr = str;
  let splitStr = tempStr.substring(startIndex, endIndex);
  console.log("tempStr", tempStr);
  let revStr = str.split("").splice(startIndex, endIndex, 0).reverse().join("");
  console.log("fp", splitStr, revStr);
  if (splitStr == revStr) {
    return true;
  }
  return false;
}

// Mask Email
// surya@gmail.com

// s***a@g***l.com

const maskEmail = (email) => {
  const emailArr = email.split("");
  const indexOfAt = emailArr.indexOf("@");
  const LastindexOfPeriod = emailArr.lastIndexOf(".");
  let maskedEmail = "";
  console.log("indexOfAt", indexOfAt, "LastindexOfPeriod", LastindexOfPeriod);
  for (let i = 0; i < email.length; i++) {
    if (
      i == 0 ||
      i == indexOfAt - 1 ||
      i == indexOfAt + 1 ||
      i >= LastindexOfPeriod - 1
    ) {
      maskedEmail = maskedEmail + emailArr[i];
    } else {
      maskedEmail = maskedEmail + "*";
    }
  }
  console.log(maskedEmail);
};
maskEmail("surya.test234@rocketmail.in");
