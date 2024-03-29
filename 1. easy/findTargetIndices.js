/*
https://leetcode.com/problems/find-target-indices-after-sorting-array/

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order.
If there are no target indices, return an empty list.
The returned list must be sorted in increasing order.

----------------------------------------------------------------------------------------------

Example 1:
-
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
-
Example 2:
-
Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.
-
Example 3:
-
Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.

----------------------------------------------------------------------------------------------

Constraints:

1 <= nums.length <= 100
1 <= nums[i], target <= 100
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const targetIndices = (nums, target) => {
    const result = [];
    let first, last;
    
    nums.sort((a, b) => (a - b));
    
    first = last = nums.indexOf(target);
    
    if (first !== -1) {
        while (nums[last + 1] === target) last += 1;
    
        for (let i = first; i <= last; i += 1) {
            result.push(i);
        }
    }
    
    return result;
};
