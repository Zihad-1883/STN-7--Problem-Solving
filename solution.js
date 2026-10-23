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


// Problem 3: Time Conversion

/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function(s) {
    let output = "";
    let hourTime = Number(s.substring(0,2));
    if(s.includes("PM")){
        if(s.startsWith("12")){
           for(let i = 0; i < s.length - 2; i++){
            output += s[i]
        } 
        return output;
        } else {
            hourTime += 12
        output += hourTime.toString();
        for(let i = 2; i < s.length - 2; i++){
            output += s[i]
        }
        return output;
        }
        
    } else {
        if(s.startsWith("12")){
            output += "00";
            for(let i = 2; i < s.length - 2; i++){
            output += s[i];
        }
        } else{
            for(let i = 0; i < s.length - 2; i++){
            output += s[i];
        }
        }
        
        return output;
    }

    return output;
};


// Problem 4: String Repeat

/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function(n, s) {
    if(n === 0) return "";
    let output = "";
    for(let i = 0; i<n; i++){
        output += s;
    }
    return output
};

console.log(repeatStr(4 , "a"))
