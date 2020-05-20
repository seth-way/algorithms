/*
There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group.
Given the array groupSizes of length n telling the group size each person belongs to,
return the groups there are and the people's IDs each group includes.

You can return any solution in any order and the same applies for IDs.
Also, it is guaranteed that there exists at least one solution. 

Example 1:

Input: groupSizes = [3,3,3,3,3,1,3]
Output: [[5],[0,1,2],[3,4,6]]
Explanation: 
Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

Example 2:

Input: groupSizes = [2,1,3,3,3,2]
Output: [[1],[0,5],[2,3,4]]
*/

const groupThePeople = (groupSizes) => {
  const result = [];

  if (groupSizes.length === 0) {
    return result;
  }
  
  // used to store groups that are not yet complete
  const partialGroups = {};

  // helper function to update partial groups
  const updatePartialGroups = (index) => {
    let groupSize = groupSizes[index];

    // if current group size isn't yet started, create a key for it.
    if(!partialGroups[groupSize]) {
      partialGroups[groupSize] = [];
    }

    // add current index to its proper group size
    partialGroups[groupSize].push(index);

    // if current group size is full
    if (partialGroups[groupSize].length === groupSize) {
      // add current group size array to result
      result.push(partialGroups[groupSize]);
      // and remove the key from the partial groups object
      delete partialGroups[groupSize];
    }
  }
  

  for (let i = 0; i < groupSizes.length; i += 1) {
    // groups of size 1 can be added directly to result array
    if (groupSizes[i] === 1) {
      result.push([i]);
    } else {
      // all others can be updated using the helper function
      updatePartialGroups(i);
    }
  }

  return result;
}