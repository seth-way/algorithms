// Given a non-negative integer num,
// return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2,
// otherwise, you have to subtract 1 from it.

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  
  let steps = 0;
  
  const checkNumber = (int) => {
    if (int === 0) {
      return;
    } else if ( int % 2 === 0) {
      steps += 1;
      checkNumber(int / 2);
    } else {
      steps += 1;
      checkNumber(int - 1);
    }
  }
  
  checkNumber(num);
  
  return steps;
};
