/*
https://leetcode.com/problems/count-primes/

Given an integer n,
return the number of prime numbers that are strictly less than n.

-------------------------------------------------------------------

Example 1:
-
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
-
Example 2:
-
Input: n = 0
Output: 0
-
Example 3:
-
Input: n = 1
Output: 0

-------------------------------------------------------------------

Constraints:
-
0 <= n <= 5 * 106
*/

/**
 * @param {number} n
 * @return {number}
 */
 const countPrimes = (n) => {
    if (n < 3) return 0;
    // n >= 3 will include 2 as first
    // prime number
    let primes = 1;
    const idxIsPrime = new Array(n).fill(1);
 
    for (let i = 3; i < n; i += 2) {
        if (idxIsPrime[i]) {
            primes += 1;
            // make all multiples of current idx
            // not a prime number
            for (let j = i + i; j < n; j += i) {
                idxIsPrime[j] = 0;
            }
        }
    }
    
    return primes;
};
