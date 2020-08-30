/*
https://leetcode.com/problems/score-after-flipping-matrix/

We have a two dimensional matrix A where each value is 0 or 1.

A move consists of choosing any row or column, and toggling each value in that row or column:
changing all 0s to 1s, and all 1s to 0s.

After making any number of moves, every row of this matrix is interpreted as a binary number,
and the score of the matrix is the sum of these numbers.

Return the highest possible score.

------------------------------------

Example 1:

Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation:
Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

------------------------------------

Note:

1 <= A.length <= 20
1 <= A[0].length <= 20
A[i][j] is 0 or 1.
*/

/**
 * @param {number[][]} A
 * @return {number}
 */
const matrixScore = (A) => {
  const swapDigit = (val) => (val === 1 ? 0 : 1);

  // ensure each row starts with a 1
  A.forEach((row, idx) => {
    if (row[0] === 0) {
      A[idx] = row.map((val) => (swapDigit(val)));
    }
  });

  // iterate over each column of the matrix
  for (let i = 1; i < A[0].length; i += 1) {
    const columnSum = A.reduce((acc, row) => (acc + row[i]), 0);

    // if there are more 0's than 1's... toggle the column
    if (columnSum < (A.length + 1) / 2) {
      A.forEach((row, idx) => {
        A[idx][i] = swapDigit(A[idx][i]);
      });
    }
  }

  // reduce the array by adding together each
  // row's parsed binary string value
  return A.reduce((acc, row) => (acc + parseInt(row.join(''), 2)), 0);
};
