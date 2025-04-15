function longestCollatz(limit) {
  let maxLength = 0;
  let result = 0;

  for (let i = 2; i < limit; i++) {
    let n = i;
    let length = 1;

    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      length++;
    }

    if (length > maxLength) {
      maxLength = length;
      result = i;
    }
  }

  return result;
}

console.log(longestCollatz(1000000));
