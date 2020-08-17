/*
https://leetcode.com/problems/bulls-and-cows/

You are playing the following Bulls and Cows game with your friend:
    You write down a number and ask your friend to guess what the number is.
    Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly
    in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows").
    Your friend will use successive guesses and hints to eventually derive the secret number.

Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 

Please note that both secret number and friend's guess may contain duplicate digits.

--------------------------------------------------------------

Example 1:

Input: secret = "1807", guess = "7810"

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.

Example 2:

Input: secret = "1123", guess = "0111"

Output: "1A1B"

Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
*/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

const getHint = (secret, guess) => {
    if (secret === guess) {
        return secret.length + 'A0B';
    }
    
    let [bulls, cows] = [0, 0];

    // both extraDigit arrays will store counts for all non-bull digits
    // where array[digit] = count
    let secretExtraDigits = new Array(10);
    let guessExtraDigits = new Array(10);
    
    for (let i = 0; i < secret.length; i += 1) {
        if (secret[i] === guess[i]) {
            bulls += 1;
        } else {    
            if (secretExtraDigits[secret[i]]) {
                secretExtraDigits[secret[i]] += 1;
            } else {
                secretExtraDigits[secret[i]] = 1;
            }
            
            if (guessExtraDigits[guess[i]]) {
                guessExtraDigits[guess[i]] += 1;
            } else {
                guessExtraDigits[guess[i]] = 1;
            }
        }
    }
    
    for (let i = 0; i < 10; i += 1) {
        let a = secretExtraDigits[i] ? secretExtraDigits[i] : 0;
        let b = guessExtraDigits[i] ? guessExtraDigits[i] : 0;

        // a cow will be counted in both a && b, so we increment
        // the cows count by the minumum of a & b
        cows += Math.min(a, b);
    }
    
    return bulls + 'A' + cows + 'B';
};