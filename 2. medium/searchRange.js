/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

Given an array of integers nums sorted in ascending order,
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

-------------------------------------------------------------------------

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

-------------------------------------------------------------------------

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let first = -1;
    let last = -1;
    let middle;
    
    // loop breaks if element not found
    // or array is empty
    while (start <= end) {
        // find middle index between start and end indices
        middle = Math.floor(start + (end - start) / 2);
        
        if (nums[middle] === target) {
            // find first match to target
            first = middle;
            while (nums[first - 1] === target) {
                first -= 1;
            }
            
            // find last match to target
            last = middle;
            while (nums[last + 1] === target) {
                last += 1;
            }
            
            return [first, last];
        // else update search range
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    
    return [first, last];
};
