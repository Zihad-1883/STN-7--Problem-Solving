// Problem 1: Staircase

/**
 * @param {number} n
 * @return {string}
 */
var staircase = function(n) {
    let output = ``;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++){
          if( j < n - (i + 1)){
            output += ' '
          } else {
            output +='#'
          }
        } 
        if (i < n - 1) {
            output += '\n';
        }
    }
    return output;
};

