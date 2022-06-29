/*
https://leetcode.com/problems/intersection-of-two-arrays-ii/

Given two integer arrays nums1 and nums2,
return an array of their intersection.
Each element in the result must appear as many times
as it shows in both arrays and you may return the result in any order.

--------------------------------------------------------------------------

Example 1:
-
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
-
Example 2:
-
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

--------------------------------------------------------------------------

Constraints:
-
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 const intersect = (nums1, nums2) => {
    let result = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i += 1;
            j += 1;
        } else if (nums1[i] < nums2[j]) {
            i += 1;
        } else {
            j += 1;
        }
    }
    
    return result;
};
