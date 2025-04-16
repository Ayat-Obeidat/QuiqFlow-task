// Problem:
// Given UK coin denominations (1p, 2p, 5p, 10p, 20p, 50p, £1=100p, £2=200p),
// calculate how many different ways we can make up a given amount (in pence).

/**
 * Calculates the number of ways to make a given amount using British coin denominations.
 * @param {number} amount - The target amount in pence.
 * @returns {number} The number of possible combinations.
 */
function countCoinCombinations(amount) {
  const coinDenominations = [1, 2, 5, 10, 20, 50, 100, 200];
  const combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1; // Base case: 1 way to make 0p

  for (const coin of coinDenominations) {
    for (let currentAmount = coin; currentAmount <= amount; currentAmount++) {
      combinations[currentAmount] += combinations[currentAmount - coin];
    }
  }

  return combinations[amount];
}

// Example usage
const targetAmount = 200;
console.log(
  `Number of ways to make ${targetAmount}p:`,
  countCoinCombinations(targetAmount)
);
