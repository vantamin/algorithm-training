// eslint-disable-next-line no-unused-vars
function solution(s) {
  let count = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const c of s) {
    if (c === '(') {
      count += 1;
    } else {
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }

  return count === 0;
}
