/*
https://leetcode.com/problems/buddy-strings/

Given two strings A and B of lowercase letters,
return true if and only if we can swap two letters in A so that the result equals B.

---------------------------------------------

Example 1:

Input: A = "ab", B = "ba"
Output: true

Example 2:

Input: A = "ab", B = "ab"
Output: false

Example 3:

Input: A = "aa", B = "aa"
Output: true
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
const buddyStrings = (A, B) => {
  // strings of different lengths are always false
  if (A.length !== B.length) {
    return false;

    // equal strings are swappable only if they contain a repeating character
  } if (A === B) {
    for (let i = 0; i < A.length; i += 1) {
      if (A.indexOf(A[i]) !== A.lastIndexOf(A[i])) {
        return true;
      }
    }

    return false;

    // different strings must contain exactly 2 differences
    // and these differences must be swappable characters
  }
  let diff1; let diff2;

  for (let i = 0; i < A.length; i += 1) {
    if (A[i] !== B[i]) {
      if (!diff1) {
        diff1 = A[i] + B[i];
      } else if (!diff2) {
        diff2 = B[i] + A[i];
      } else {
        return false;
      }
    }
  }

  return diff1 === diff2;
};
