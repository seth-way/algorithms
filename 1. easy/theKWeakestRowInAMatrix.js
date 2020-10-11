/*
https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians),
return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j,
or they have the same number of soldiers but i is less than j.
Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

-------------------------------------------------------------

Example 1:

Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 2 
row 1 -> 4 
row 2 -> 1 
row 3 -> 2 
row 4 -> 5 
Rows ordered from the weakest to the strongest are [2,0,3,1,4]

Example 2:

Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 1 
row 1 -> 4 
row 2 -> 1 
row 3 -> 1 
Rows ordered from the weakest to the strongest are [0,2,3,1]
*/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

const kWeakestRows = (mat, k) => {
    // create an array of tuples ... [numSoldiers, originalIndex]
    let soldiers = mat.map((array, index) => [array.reduce((acc, val) => (acc + val), 0), index]);
    
    // sort based on ascending number of soldiers
    soldiers.sort((a, b) => (a[0] - b[0]));
    
    let results = [];
    
    // push the original index until the kth value
    for(let i = 0; i < k; i += 1) {
        results.push(soldiers[i][1]);
    }
    return results;
};