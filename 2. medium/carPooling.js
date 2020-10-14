/*
https://leetcode.com/problems/car-pooling/

You are driving a vehicle that has capacity empty seats initially available for passengers.
The vehicle only drives east (ie. it cannot turn around and drive west.)

Given a list of trips, trip[i] = [num_passengers, start_location, end_location]
contains information about the i-th trip: the number of passengers that must be picked up,
and the locations to pick them up and drop them off. 

The locations are given as the number of kilometers due east from your vehicle's initial location.

Return true if and only if it is possible to pick up and drop off all passengers for all the given trips. 

---------------------------------------------------------------------------------------------------------

Example 1:

Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false

Example 2:

Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true

Example 3:

Input: trips = [[2,1,5],[3,5,7]], capacity = 3
Output: true

Example 4:

Input: trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
Output: true
 
---------------------------------------------------------------------------------------------------------

Constraints:

trips.length <= 1000
trips[i].length == 3
1 <= trips[i][0] <= 100
0 <= trips[i][1] < trips[i][2] <= 1000
1 <= capacity <= 100000
*/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = (trips, capacity) => {
    // separate trips into pickUps & dropOffs
    const pickUps = [];
    const dropOffs = [];
    
    trips.forEach((trip) => {
        pickUps.push([trip[1],trip[0]]);   // [location, num_passengers]
        dropOffs.push([trip[2], trip[0]]); // [location, num_passengers]
    });
    
    // sort both arrays in descending order by location
    pickUps.sort((a, b) => (b[0] - a[0]));
    dropOffs.sort((a, b) => (b[0] - a[0]));
    
    let passengers = 0;
    let nextPickUp = pickUps.pop();
    let nextDropOff = dropOffs.pop();
    
    while(nextPickUp) { // nextPickUp will eventually be undefined
    
        // pick up or drop off (whichever is closer)
        if (nextPickUp[0] < nextDropOff[0]) {
            passengers += nextPickUp[1];
            if (passengers > capacity) {
                return false;
            }
            nextPickUp = pickUps.pop();
        } else {
            passengers -= nextDropOff[1];
            nextDropOff = dropOffs.pop();
        }
    }
    
    return true;
};