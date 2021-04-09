/*
https://leetcode.com/problems/determine-color-of-a-chessboard-square/

You are given coordinates, a string that represents the coordinates of a square of the chessboard.
The reference chessboard is black at 'a1' and alternates between black and white with each
adjacent square.

Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square.
The coordinate will always have the letter first, and the number second.

--------------------------------------------------------------------------------------------------

Example 1:

Input: coordinates = "a1"
Output: false
Explanation: From the reference chessboard, the square with coordinates "a1" is black, so return false.
Example 2:

Input: coordinates = "h3"
Output: true
Explanation: From the reference chessboard, the square with coordinates "h3" is white, so return true.
Example 3:

Input: coordinates = "c7"
Output: false
 

Constraints:

coordinates.length == 2
'a' <= coordinates[0] <= 'h'
'1' <= coordinates[1] <= '8'
*/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = (coordinates) => {
    // even rows return true for white, odd rows return false for black
    let result = parseInt(coordinates[1]) % 2 === 0 ? true : false;
    // flip the result for odd columns
    return 'aceg'.includes(coordinates[0]) ? result : !result;
};