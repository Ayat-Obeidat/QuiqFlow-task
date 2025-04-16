/*
Problem:
In England the currency is made up of pound, £, and pence, p.
There are eight coins in general circulation:

   1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

It is possible to make £2 in the following way:

   1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

Given that total amount of pences, calculate the number of ways to create that amount.
Example:
coinCombination(200p) //-> 73682
*/

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
