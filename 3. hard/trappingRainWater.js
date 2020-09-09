/*
https://leetcode.com/problems/trapping-rain-water/

Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it is able to trap after raining.

|       X    |
|   X   XX X |
| X XX XXXXXX|

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].

|       X    |
|   X∘∘∘XX∘X |
| X∘XX∘XXXXXX|

In this case, 6 units of rain water (∘) are being trapped.

-------------------------------------------------------

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
    
    let maxLeft = 0; 
    // create helper array which holds the value
    // of the largest value to the left of the
    // current indexed value
    const maxToLeft = height.map((val, idx) => {
        if (height[idx - 1] > maxLeft) {
            maxLeft = height[idx - 1];
        }
        
        return maxLeft;
    })

    let maxRight = 0;
    
    // reduce array from right to left
    return height.reduceRight((acc, val, idx) => {
        // update maxRight with largest value to the right
        // of the current value
        if (height[idx + 1] > maxRight) {
            maxRight = height[idx + 1];
        }
        
        const lowerMax = Math.min(maxToLeft[idx], maxRight);

        return acc + Math.max(lowerMax - val, 0);
    }, 0);
};