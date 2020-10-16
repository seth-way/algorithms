/*
https://leetcode.com/problems/jump-game/

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

------------------------------------------------------------------------------------------------------

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation:
    Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation:
    You will always arrive at index 3 no matter what.
    Its maximum jump length is 0, which makes it impossible to reach the last index.
 
------------------------------------------------------------------------------------------------------

Constraints:

1 <= nums.length <= 3 * 10^4
0 <= nums[i][j] <= 10^5
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums, idx = nums.length - 1) => {    
    // recursively checks array from right to left
    // until index = 0 => canJump
    // or target index = -1 => cantJump
    if (idx === 0) {
        return true;
    }
        
    let distance = 1;
        
    // increase distance from current index to check for 
    // a jump that can reach current index
    while (idx - distance >= 0 && distance > nums[idx - distance]) {
        distance += 1;
    }
        
    if (idx - distance === -1) {
        return false;
    }
        
    // repeat from next reachable index
    return canJump(nums, idx - distance);
};