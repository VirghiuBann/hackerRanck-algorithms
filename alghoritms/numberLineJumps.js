function kangaroo(x1, v1, x2, v2) {
  if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1) || v1 === v2) return 'NO';

  if ((x2 - x1) % (v1 - v2) === 0 || (x2 - x1) / (v2 - v1) === 0) return 'YES';

  return 'NO';
}

const e1 = [2, 1, 1, 2];
const e2 = [0, 3, 4, 2];
const e3 = [0, 2, 5, 3];
const e4 = [21, 6, 47, 3];

console.log(kangaroo(...e1));
console.log(kangaroo(...e2));
console.log(kangaroo(...e3));
console.log(kangaroo(...e4));
