function collatzLength(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  let next = n % 2 === 0 ? n / 2 : 3 * n + 1;
  memo[n] = 1 + collatzLength(next, memo);
  return memo[n];
}

function longestCollatz(limit) {
  let maxLength = 0;
  let startingNumber = 1;
  let memo = {};

  for (let i = 1; i < limit; i++) {
    let length = collatzLength(i, memo);
    if (length > maxLength) {
      maxLength = length;
      startingNumber = i;
    }
  }

  return startingNumber;
}

console.log(longestCollatz(1000000));
