/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
Each character in S is a type of stone you have.
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0
*/

const numJewelsInStones = (J, S) => {
  let count = 0;
  const jewelTypes = {};
  
  // create an object with all possible jewel types as keys
  for (let i = 0; i < J.length; i += 1) {
      jewelTypes[J[i]] = true;
  }
  
  // iterate through stones
  for (let j = 0; j < S.length; j += 1) {
      
    // if stone is a jewel type ... add to the count
    if (jewelTypes[S[j]]) {
      count += 1;
    }
  }

  return count;
} 