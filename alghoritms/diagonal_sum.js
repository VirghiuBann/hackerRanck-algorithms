function sum(arr) {
  const arrLength = arr.length;

  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < arrLength; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][arrLength - 1 - i];
  }
  console.log(primaryDiagonal, secondaryDiagonal);
  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

const arr1 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(sum(arr1));
