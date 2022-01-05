function plusMinus(arr) {
  let positiveValue = 0,
    negativeValue = 0,
    zeroValue = 0,
    n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    positiveValue += arr[i] > 0 ? 1 : 0;
    negativeValue += arr[i] < 0 ? 1 : 0;
    zeroValue += arr[i] === 0 ? 1 : 0;
  }
  console.log((positiveValue / n).toPrecision(6));
  console.log((negativeValue / n).toPrecision(6));
  console.log((zeroValue / n).toPrecision(6));
}

const arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
