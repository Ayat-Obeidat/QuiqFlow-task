/*
The Problem:
Bubble Sort is a simple sorting algorithm that compares each pair of adjacent elements in an array.
If an element is greater than the next one, they are swapped. This process "bubbles" the largest elements 
to the end of the array. The algorithm repeats this process until the array is fully sorted.
 
Constraints: Do not use JavaScript's built-in sort function.
The time complexity of Bubble Sort is O(n^2) in the worst case.
 
 Extra credit: Optimize by exiting early if no elements are swapped during a pass.
 This can improve the time complexity in the best case to O(n) when the array is already sorted.
 */

//  The Solution
function bubbleSort(arr) {
  for (let a = 0; a < arr.length; i++) {
    let swapped = false;

    for (let b = 0; b < arr.length - 1; j++) {
      if (arr[b] > arr[b + 1]) {
        let temp = arr[b];
        arr[b] = arr[b + 1];
        arr[b + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}
