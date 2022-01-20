function matchingStrings(strings, queries) {
  const queryResult = queries.map((q) => {
    const sizeMatch = strings.filter((s) => q == s);
    return sizeMatch.length;
  });
  console.log(...queryResult);
  return queryResult;
}

const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];

matchingStrings(strings, queries);
