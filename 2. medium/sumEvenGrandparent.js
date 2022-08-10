/*
https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/

Given the root of a binary tree,
return the sum of values of nodes with an even-valued grandparent.
If there are no nodes with an even-valued grandparent, return 0.
-
A grandparent of a node is the parent of its parent if it exists.

------------------------------------------------------------------------------------

Example 1:
-
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
-
Example 2:
-
Input: root = [1]
Output: 0
 
------------------------------------------------------------------------------------

Constraints:
-
The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 100
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 const sumEvenGrandparent = (root, sum = 0) => {
    if (root.val % 2 === 0) {
        if (root.left) {
            if (root.left.left && root.left.left.val) sum += root.left.left.val;
            if (root.left.right && root.left.right.val) sum += root.left.right.val;
        }
        
        if (root.right) {
            if (root.right.left && root.right.left.val) sum += root.right.left.val;
            if (root.right.right && root.right.right.val) sum += root.right.right.val;
        }
    }
    
    if (root.left) sum = sumEvenGrandparent(root.left, sum);
    if (root.right) sum = sumEvenGrandparent(root.right, sum);
    
    return sum;
};