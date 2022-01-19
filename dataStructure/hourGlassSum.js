function hourglassSum(arr) {
  let partialArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length - i >= 3) {
      for (let j = 0; j < arr.length; j++) {
        if (arr.length - j >= 3) {
          let arrTemp = [
            arr[i][j],
            arr[i][j + 1],
            arr[i][j + 2],
            arr[i + 1][j + 1],
            arr[i + 2][j],
            arr[i + 2][j + 1],
            arr[i + 2][j + 2],
          ];
          partialArr.push(arrTemp.reduce((a, b) => a + b, 0));
        } else {
          break;
        }
      }
    } else {
      break;
    }
  }
  console.log(...partialArr);
  console.log(Math.max(...partialArr));
  return Math.max(...partialArr);
}

const a = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
const b = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
const c = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

hourglassSum(a);
hourglassSum(b);
hourglassSum(c);
