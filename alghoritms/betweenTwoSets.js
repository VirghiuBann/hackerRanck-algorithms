function getTotalX(a, b) {
  let result = 0,
    lcm = a[0],
    gcd = b[0];

  const getLowestCommonMultiple = (n1, n2) => {
    if (n1 == 0 || n2 == 0) return 0;
    else {
      const gcd = getGreatestCommonDivisor(n1, n2);
      return Math.abs(n1 * n2) / gcd;
    }
  };

  const getGreatestCommonDivisor = (n1, n2) => {
    if (n2 == 0) return n1;
    return getGreatestCommonDivisor(n2, n1 % n2);
  };

  for (let val of a) {
    lcm = getLowestCommonMultiple(lcm, val);
  }

  for (let val of b) {
    gcd = getGreatestCommonDivisor(gcd, val);
  }

  let partialMultiple = 0;
  while (partialMultiple <= gcd) {
    partialMultiple += lcm;
    if (gcd % partialMultiple == 0) {
      result++;
    }
  }

  return result;
}

const a = [2, 6],
  b = [24, 36];
const c = [2, 4],
  d = [16, 32, 96];

getTotalX(a, b);
console.log(getTotalX(c, d));
