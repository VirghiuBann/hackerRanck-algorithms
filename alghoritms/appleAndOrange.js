function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const appleAddPosition = apples.map((item) => item + a);
  const orangeAddPosition = oranges.map((item) => item + b);

  console.log(appleAddPosition);
  console.log(orangeAddPosition);
  let countApples = 0;
  let countOranges = 0;
  for (let i = 0; i < appleAddPosition.length; i++) {
    if (appleAddPosition[i] >= s && appleAddPosition[i] <= t) {
      countApples++;
    }
  }
  for (let i = 0; i < orangeAddPosition.length; i++) {
    if (orangeAddPosition[i] >= s && orangeAddPosition[i] <= t) {
      countOranges++;
    }
  }

  console.log(countApples);
  console.log(countOranges);
}

const s = 7,
  t = 11;
const a = 5,
  b = 15;
const m = 3; //apples
const n = 2; //oranges
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);
