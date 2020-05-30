/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

---------------------------------------------

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
 
---------------------------------------------

Constraints:

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5
*/


/**
 * @param {number[]} arr
 * @return {number[]}
 */

const replaceElements = (arr) => {
  let largest = -1;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    let temp = arr[i];
    arr[i] = largest;
    
    if (temp > largest) {
      largest = temp;
    }
  }
    
  return arr;
};