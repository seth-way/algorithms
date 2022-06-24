/*
https://leetcode.com/problems/subsets-ii/

Given an integer array nums that may contain duplicates,
return all possible subsets (the power set).
-
The solution set must not contain duplicate subsets.
Return the solution in any order.

-------------------------------------------------------------------

Example 1:
-
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
-
Example 2:
-
Input: nums = [0]
Output: [[],[0]]

-------------------------------------------------------------------

Constraints:
-
1 <= nums.length <= 10
-10 <= nums[i] <= 10
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsetsWithDup = (nums) => {
    const result = [];
    nums.sort((a, b) => a - b);
    
    // recursively fine and fill all subsets
    const findSubsets = (subSet, idx = 0) => {
        result.push([...subSet]);
        
        for (let i = idx; i < nums.length; i += 1) {
            if (i > idx && nums[i-1] === nums[i]) continue;

            subSet.push(nums[i]);
            
            findSubsets(subSet, i + 1);
            
            subSet.pop();
        }
    }

    findSubsets([]);
    
    return result;
};
