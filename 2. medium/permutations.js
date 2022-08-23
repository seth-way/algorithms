/*
https://leetcode.com/problems/permutations/

Given an array nums of distinct integers,
return all the possible permutations.
You can return the answer in any order.

--------------------------------------------------------------------

Example 1:
-
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
-
Example 2:
-
Input: nums = [0,1]
Output: [[0,1],[1,0]]
-
Example 3:
-
Input: nums = [1]
Output: [[1]]

--------------------------------------------------------------------

Constraints:
-
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const permute = (nums, current = [], result = []) => {   
    nums.forEach((val, idx) => { 
        current.push(val);

        if (nums.length === 1) {
            result.push([...current]);
        } else if (nums.length > 1) {
            const next = [...nums];
            next.splice(idx, 1);
            result = permute(next, current, result);
        }

        current.pop();
    });

    return result;
};
