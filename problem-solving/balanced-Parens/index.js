// Today's Problem – Balanced Parentheses:
/*
 write a function that takes a string of text and returns true if
the parentheses are balanced and false otherwise.
 
  Example:
    balancedParens('(');  // false
   balancedParens('()'); // true
    balancedParens(')(');  // false
    balancedParens('(())');  // true
 
  Step 2:
   make your solution work for all types of brackets
 
  Example:
  balancedParens('[](){}'); // true
   balancedParens('[({})]');   // true
   balancedParens('[(]{)}'); // false
 
  Step 3:
  ignore non-bracket characters
  balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
  balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 
 "())"
 */
// the solution

function balancedParens(str) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const openingBrackets = new Set(["(", "[", "{"]);
  for (const char of str) {
    if (openingBrackets.has(char)) {
      stack.push(char);
    } else if (bracketPairs[char]) {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
// Example usage
console.log(balancedParens("(")); // false
console.log(balancedParens("()")); // true
console.log(balancedParens(")(")); // false
console.log(balancedParens("(())")); // true
console.log(balancedParens("[](){}")); // true
console.log(balancedParens("[({})]")); // true
console.log(balancedParens("[(]{)}")); // false
console.log(balancedParens(" var wow  = { yo: thisIsAwesome() }")); // true
console.log(balancedParens(" var hubble = function() { telescopes.awesome();")); // false
