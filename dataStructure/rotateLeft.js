function rotateLeft(d, arr) {
  // Write your code here
  const rotateArr = arr.slice(d, arr.length).concat(arr.slice(0, d));

  console.log(rotateArr);
}
const d = 2;
const arr = [1, 2, 3, 4, 5];

rotateLeft(d, arr);
