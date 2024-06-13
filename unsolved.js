// console.log("Hello, World!");

N = 10; // total seats in a row
K = 1; // distance btw people
M = 2; // number of seats of filled
S = [1, 4]; // seats numbers occupied
// Expected Return Value = 3 // total number of seats can be occupied

// 1,2s,3,4s,5,6s,7,8,9,10

// const N = 15
// const K = 2
// const M = 3
// const S = [4, 11, 14]

// [1,4,7,10,13]
// Expected Return Value = 1

// 1,2,3s,4,5,s6,7,8,s9,10,11,12,13,s14,15
let i = 1;
let rangeOfI = [];
let count = 0;
let temp = [];
while (i <= N) {
  console.log("i value", i);
  if (i == 1 && !temp.includes(i)) {
    rangeOfI.push(i + K + 1);
    rangeOfI.push(i);
  } else {
    rangeOfI.push(2 * K + i + 1);
    rangeOfI.push(i);
  }
  i = i + K + 1;
  const isPresent = findSeatPresentInTheArr(rangeOfI, S);
  rangeOfI = [];
  if (!isPresent.length) {
    console.log("i value in loop", i);
    count++;
  } else {
    console.log("temp avle", temp, "i value", i);
    if (!temp.includes(i)) {
      i = isPresent.pop();
      temp.push(i);
    }
  }
}
console.log("count value", count);

function findSeatPresentInTheArr(rangeOfI, occupiedSeats) {
  console.log("rangeOfI", rangeOfI);
  const res = occupiedSeats.filter(
    (seat) => seat >= rangeOfI[1] && seat <= rangeOfI[0]
  );
  console.log("res", res);
  return res;
}

// function findNumberOfSeatsCanBeOccupied(TSeats, Dist, FSeats, Oseats) {
//   let count = 0;
//   for (let i=1; i<=TSeats; i+=Dist+1) {
//     console.log('i Value', i)
//     const checkOcSeat = i==1 ? i+Dist : i+2*Dist+1;
//     let isSeatFilled = findIfSeatIsFilled(Oseats, i, checkOcSeat);
//     console.log('isSeatFilled', isSeatFilled)
//     if (!isSeatFilled) {
//       count++
//     }
//   }
//   console.log('count', count)
// }

// function findIfSeatIsFilled(arr, min, max) {
//   console.log('min vale', min, 'max value', max)
//   for (let i=min; i<max; i++) {
//     if (arr.includes(i)) {
//       console.log('true condition', i)
//       return true;
//     }
//   }
//   return false
// }

// findNumberOfSeatsCanBeOccupied(N, K, M, S)
