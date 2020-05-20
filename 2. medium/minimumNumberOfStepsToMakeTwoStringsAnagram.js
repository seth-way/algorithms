/*
Given two equal-size strings s and t.
In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

Example 1:

Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.

Example 2:

Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
*/

const minSteps = (s, t) => {
  let result = 0;

  // helper function to deconstruct a string to an object which tracks
  // how many of each character the string contains
  const stringToCharObject = (str) => {
    const charObject = {};

    for (let i = 0; i < str.length; i += 1) {
      if (charObject[str[i]]) {
        charObject[str[i]] += 1;
      } else {
        charObject[str[i]] = 1;
      }
    }

    return charObject;
  }

  // use helper function to deconstruct strings s & t
  const charsInS = stringToCharObject(s);
  const charsInT = stringToCharObject(t);

  // loop through character object for string s
  for (const char in charsInS) {
      // if t does not contain the given character...
      if (!charsInT[char]) {
        // add the count for that character to the step total
        result += charsInS[char];
      }
      // if t contains less of the given character...
      if (charsInT[char] < charsInS[char]) {
        // add the difference in the two strings count for that character
        result += charsInS[char] - charsInT[char];
      }
  }

  return result;
}