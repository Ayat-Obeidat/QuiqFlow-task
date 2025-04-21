// 🧠 Today's Problem – Binary Search Array
/*
 Given a SORTED array, find the index of an element
 using a binary search algorithm.
  Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 */
// the solution
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
