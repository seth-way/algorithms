/*
https://leetcode.com/problems/find-the-town-judge/

In a town, there are N people labelled from 1 to N.
There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

-----------------------------------------

Example 1:

Input: N = 2, trust = [[1,2]]
Output: 2

Example 2:

Input: N = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:

Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

const findJudge = (N, trust) => {
    if (N === 1) {
        return 1;
    }
    
    let townsPeople = {};
    
    for (let i = 0; i < trust.length; i += 1) {
        let truster = trust[i][0];
        let trusted = trust[i][1];
        
        if (!townsPeople[truster]){
            townsPeople[truster] = {};
            townsPeople[truster].trusts = new Array();
            townsPeople[truster].trustedBy = new Array();
        }
        
        if (!townsPeople[trusted]){
            townsPeople[trusted] = {};
            townsPeople[trusted].trusts = new Array();
            townsPeople[trusted].trustedBy = new Array();
        }
        
        townsPeople[truster].trusts.push(trusted);
        townsPeople[trusted].trustedBy.push(truster);
    }
    
    Object.keys(townsPeople).forEach(person => {
        if (townsPeople[person].trusts.length > 0 || townsPeople[person].trustedBy.length < N - 1) {
            delete townsPeople[person];
        } 
    });
    
    return Object.keys(townsPeople).length === 1 ? Object.keys(townsPeople)[0] : -1;
};