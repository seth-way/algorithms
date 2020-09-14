/*
https://leetcode.com/problems/battleships-in-a-board/

Given an 2D board, count how many battleships are in it.
The battleships are represented with 'X's,
empty slots are represented with '.'s.

You may assume the following rules:

You receive a valid board,
made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically.
In other words, they can only be made of the shape 1xN
(1 row, N columns) or Nx1 (N rows, 1 column),
where N can be of any size.
At least one horizontal or vertical cell separates between two battleships -
there are no adjacent battleships.

----------------------------------------------------------

Example:

X..X
...X
...X

In the above board there are 2 battleships.

Invalid Example:

...X
XXXX
...X

This is an invalid board that you will not receive -
as battleships will always have a cell separating between them.
*/
/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = (board) => {
    let battleships = 0;
    
    // helper function to mark current ship
    // so that it is only counted once
    const markShip = (R, C) => {
        board[R][C] = '.';
        
        // recursively mark to end of ship - right
        if (board[R][C + 1] === 'X') {
            markShip(R, C + 1);
        }
        // recursively mark to end of ship - down
        else if (board[R +1] && board[R + 1][C] === 'X') {
            markShip(R + 1, C)
        }
    }
    
     for (let row = 0; row < board.length; row += 1) {
        for (let col = 0; col < board[row].length; col += 1) {
            if (board[row][col] === 'X') {
                battleships += 1;
                markShip(row, col);
            }
        }
     }

     return battleships;
};
