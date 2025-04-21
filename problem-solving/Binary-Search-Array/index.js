// 🧠 Today's Problem – Binary Search Array
/*
 Given a SORTED array, find the index of an element
 using a binary search algorithm.
  Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 */
// the solution

function findIndex(list, value) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (list[middle] === value) {
      return middle;
    }

    if (list[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}
