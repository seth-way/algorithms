/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

Note.
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

const createHash = (nums) => {
  const hashTable = {};

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      let sum = nums[i] + nums[j];
      if (hashTable[sum]) {
        hashTable[sum].push([i, j]);
      } else {
        hashTable[sum] = [[i, j]];
      }
    }
  }

  return hashTable;
}

const threeSum = (nums) => {
  const hashTable = createHash(nums);
  const solutions = {};

  for (let i = 0; i < nums.length; i += 1) {
      let valueThree = nums[i];
      let allPossiblePairs = hashTable[-valueThree];
      if (allPossiblePairs) {
        for(let j = 0; j < allPossiblePairs.length; j+= 1) {
          let [indexOne, indexTwo] = allPossiblePairs[j];
          if (indexOne !== i && indexTwo !== i) {
            let workingTriple = [nums[indexOne], nums[indexTwo], valueThree];
            workingTriple.sort();
            if(!solutions[JSON.stringify(workingTriple)]) {
                solutions[JSON.stringify(workingTriple)] = workingTriple;
            }
          }
        }
      }
  }

  return Object.keys(solutions).map((key) => (solutions[key]));
}
