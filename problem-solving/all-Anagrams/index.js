/*

Today's Problem (7) – All Anagrams

 Given a single input string, write a function that outputs an array of strings with every possible
 combination of letters.

 At first, don't worry about repeated (duplicate) strings.

 What time complexity is your solution?

 Extra credit: De-duplicate your return array without using uniq().

example usage:
var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */
// the solution
function allAnagrams(str) {
  const result = new Set();

  function generate(current, remaining) {
    if (remaining.length === 0) {
      result.add(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = current + remaining[i];
      const rest = remaining.slice(0, i) + remaining.slice(i + 1);
      generate(next, rest);
    }
  }

  generate("", str);
  return Array.from(result);
}

console.log(allAnagrams("abc")); // Output: [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
console.log(allAnagrams("aab")); // Output: [ 'aab', 'aba', 'baa' ]

// Time Complexity: O(n × n!)
