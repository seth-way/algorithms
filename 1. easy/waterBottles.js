/*
https://leetcode.com/problems/water-bottles/

Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Return the maximum number of water bottles you can drink.

---------------------------------

Example 1:

Input: numBottles = 9, numExchange = 3
Output: 13
Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
Number of water bottles you can drink: 9 + 3 + 1 = 13.

Example 2:

Input: numBottles = 15, numExchange = 4
Output: 19
Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
Number of water bottles you can drink: 15 + 3 + 1 = 19.
*/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
*/

const numWaterBottles = (numBottles, numExchange) => {
    let full = numBottles;
    let empty = 0;
    let drank = 0;
    
    const drinkWater = (fullBottles) => {
        drank += fullBottles;
        full -= fullBottles;
        empty += fullBottles;
    }
    
    const exchangeBottles = (emptyBottles) => {
        let fills = Math.floor(emptyBottles / numExchange);
        full += fills;
        empty -= (fills * numExchange);
    }
    
    while (full) {
        drinkWater (full);
        exchangeBottles (empty);
    }
    
    return drank;
};
