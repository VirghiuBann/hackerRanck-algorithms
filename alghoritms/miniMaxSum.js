function miniMaxSum(arr) {
  const arrSort = arr.sort();
  const arrMins = arrSort
    .slice(0, arr.length - 1)
    .reduce((acc, curr) => BigInt(acc) + BigInt(curr), 0);
  const arrMax = arrSort
    .slice(1, arr.length)
    .reduce((acc, curr) => BigInt(acc) + BigInt(curr), 0);

  console.log(Number(arrMins), Number(arrMax));
}

const arr = [1, 2, 3, 4, 5];

miniMaxSum(arr);
