/*
https://leetcode.com/problems/most-common-word/

Given a paragraph and a list of banned words,
return the most frequent word that is not in the list of banned words.
It is guaranteed there is at least one word that isn't banned, and that the answer is unique.
-
Words in the list of banned words are given in lowercase, and free of punctuation.
Words in the paragraph are not case sensitive.
The answer is in lowercase.
-
-----------------------------------------------------------------------------------------------
-
Example:

Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
-
-----------------------------------------------------------------------------------------------
-
Note:
-
1 <= paragraph.length <= 1000.
0 <= banned.length <= 100.
1 <= banned[i].length <= 10.
The answer is unique, and written in lowercase
(even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun.)
paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
There are no hyphens or hyphenated words.
Words only consist of letters, never apostrophes or other punctuation symbols.
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
    // map paragraph to array of lower-case words
    // excluding spaces and punctuiation
    const words = paragraph.split(/[ ,.'";:!?]/)
        .filter(word => word !== '')
        .map(word => word.toLowerCase());
    
    // map banned words to object
    // for faster lookup
    const bannedWords = {};
    banned.forEach(word => {
        bannedWords[word] = true;
    });
    
    // map words array to object
    // which tracks unique word frequencies
    const wordFreq = {};   
    words.forEach(word => {
        if (!bannedWords[word]) {
            wordFreq[word] = wordFreq[word] ? wordFreq[word] + 1 : 1;
        }
    });
    
    // set baseline most common word, and then reduce
    // array to return most common word
    wordFreq[""] = 0;              
    return Object.keys(wordFreq).reduce((mostCommon, test) => (
        wordFreq[test] > wordFreq[mostCommon] ? test : mostCommon
    ), "");
};