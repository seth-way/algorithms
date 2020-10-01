/*
https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together.
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging
the letters of a different word or phrase,
typically using all the original letters exactly once.

------------------------------------------------------------

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

------------------------------------------------------------

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    // object where keys are a sorted
    // anagram string and values
    // are arrays of strings belonging
    // to that anagram group
    const anagramGroups = {};
    
    strs.forEach((str) => {
        const sortedSTR = str.length
            // create key by sorting chars of string
            ? str.split('').sort().join('')
            // empty strings belong in sepate group
            : '_empty';
            
        if (anagramGroups[sortedSTR]) {
            anagramGroups[sortedSTR].push(str);
        } else {
            anagramGroups[sortedSTR] = [str];
        }            
    })
    
    // return array of grouped anagram arrays
    // mapped from anagramGroups object
    return Object.keys(anagramGroups).map((key) => (anagramGroups[key]));
};