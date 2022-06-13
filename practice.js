// // linear search
// const linearSearch = (arr, num) => {
//   let i = 0;
//   while (i <= arr.length) {
//     if (arr[i] === num) return i + 1;
//     i++;
//   }
//   return -1;
// };
//
// const binarySearch = (arr, num) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let middle = Math.floor((left + right) / 2);
//     if (arr[middle] === num) return middle + 1;
//     else if (arr[middle] > num) {
//       right = middle - 1;
//     } else if (arr[middle] < num) {
//       left = middle + 1;
//     }
//   }
//   return -1;
// };
//
// // string search
// const stringSearch = (str1, str2) => {
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i + j] !== str2[j]) {
//         break;
//       }
//       if (j === str2.length - 1) {
//         return;
//       }
//     }
//   }
// };
//
// // sorting
// // bubble sort
// const bubbleSort = (arr) => {};

const soln = function (s, p) {
  const checkMap = {};
  for (let i = 0; i < p.length; i++) {
    checkMap[p[i]] ? checkMap[p[i]]++ : (checkMap[p[i]] = 1);
  }
  let currentWindow = 2;
  let maxWindow = p.length;
  let p1 = 0;
  let p2 = p1 + 1;
  let currentMap = {};
  currentMap[s[p1]] = 1;
  const op = [];
  while (s.length - p1 >= p.length) {
    currentMap[s[p2]] ? currentMap[s[p2]]++ : (currentMap[s[[p2]]] = 1);
    if (
      currentWindow === maxWindow &&
      Object.keys(currentMap).length === Object.keys(checkMap).length &&
      checkMap[s[p2]]
    ) {
      op.push({
        index: [p1, p2],
        values: s
          .split("")
          .slice(p1, p2 + 1)
          .join(""),
      });
      p1++;
      p2 = p1 + 1;
      currentMap = {};
      currentMap[s[p1]] = 1;
      currentWindow = 2;
    }
    if (
      checkMap[s[p1]] &&
      checkMap[s[p2]] &&
      currentMap[s[p1]] === checkMap[s[p1]] &&
      currentMap[s[p2]] === checkMap[s[p2]]
    ) {
      p2++;
      currentWindow++;
    } else {
      p1++;
      p2 = p1 + 1;
      currentWindow = 2;
      currentMap = {};
      currentMap[s[p1]] = 1;
    }
  }

  //"cbaebaeacd" "abc" - 3 // op = [0,6]
  // 12
  return op;
};

//console.log(soln("cbaebabacd", "abc"));
console.log(soln("cbaebabacd", "abc"));
