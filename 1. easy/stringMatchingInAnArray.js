/*
https://leetcode.com/problems/string-matching-in-an-array/

Given an array of string words.
Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

--------------------------------------------

Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

Example 2:

Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */

const stringMatching = (words) => {
    let results = [];
    
    const allWords = words.join(' ');
    
    words.forEach(word => {
        if(allWords.indexOf(word) !== allWords.lastIndexOf(word)) {
            results.push(word);
        }
    });
    
    return results;
};