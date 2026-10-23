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


// Problem 2: Grading Students

/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function(grades) {
    let output = [];
    for(let i = 0; i< grades.length; i++){
        if(grades[i] < 38){
            output.push(grades[i])
        } else if (grades[i] % 5 >= 3){
            output.push(grades[i] + (5 - (grades[i] % 5)));
        } else {
            output.push(grades[i])
        }
    }
    return output
};


