function birthdayCakeCandles(candles) {
  const candlesSort = candles.sort((a, b) => a - b);
  const tallestCandles = candlesSort[candles.length - 1];
  const indexFirstCandleTallest = candlesSort.findIndex(
    (elem) => elem === tallestCandles
  );
  return candlesSort.length - indexFirstCandleTallest;
}

const candles = [3, 2, 3, 1, 3, 3, 4];
console.log(birthdayCakeCandles(candles));
