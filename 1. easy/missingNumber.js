/*
https://leetcode.com/problems/missing-number/

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
find the one that is missing from the array.

---------------------------------------------------------

Example 1:

Input: [3,0,1]
Output: 2

Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity.
Could you implement it using only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const missingNumber = (nums) => {
    // uses triangular number theorum to calculate expected
    // total with missing number ...
    // Sum = (n * (n + 1)) / 2
    const expected = ((nums.length) * (nums.length + 1)) / 2;
    const actual = nums.reduce((acc, val) => (acc + val), 0);

    // returns difference between expected and actual sum
    return expected - actual;
}