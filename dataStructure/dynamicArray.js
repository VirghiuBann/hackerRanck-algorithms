function dynamicArray(n, queries) {
  let lastAnswer = 0;
  const arr = [];
  const answer = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
  }
  for (let i = 0; i < queries.length; i++) {
    let idx = (queries[i][1] ^ lastAnswer) % n;

    if (queries[i][0] == 1) {
      arr[idx].push(queries[i][2]);
    } else if (queries[i][0] == 2) {
      const size = arr[idx].length;
      const index = queries[i][2] % size;

      lastAnswer = arr[idx][index];
      answer.push(lastAnswer);
    }
  }

  return answer;
}

const n = 2;
const queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];
dynamicArray(n, queries);
