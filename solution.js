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


// Problem 5: Reversed Strings

/**
 * @param {string} str
 * @return {string}
 */
var solution = function(str) {
    if(str.length === 0) return "";
    if(str.length === 1) return str;
    let output = "";
    for(let i = str.length - 1; i >= 0; i--){
        output += str[i];
    }
    return output;
};


// Problem 6: Sum of Positive

/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
};


// Problem 7: Grasshopper — Summation

/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num) {
    return (num * (num + 1)) / 2;

    // iterate version :

    //  let sum = 0;
    // for (let i = 1; i <= num; i++) {
    //     sum += i;
    // }
    // return sum;
};


// Problem 8: Convert a Boolean to a String

/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function(b) {
    if(b === true) return "true" 
    return "false"

    // alternative : return b.toString();
};


// Problem 9: Fizz Buzz

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let output = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            output.push("FizzBuzz")
        } else if(i % 3 === 0) {
            output.push("Fizz");
        } else if(i % 5 === 0){
            output.push("Buzz");
        } else {
            output.push(i.toString());
        }
    }
    return output;
};


// Problem 10: Running Sum of 1D Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let output = [];
    let currentSum = 0;
    for(let i = 0; i < nums.length; i++){
        currentSum += nums[i];
        output.push(currentSum)
    }
    return output
};


// Problem 11: Richest Customer Wealth

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(let i = 0; i< accounts.length; i++){
        let currentWealth = 0;
        for(let j = 0; j < accounts[i].length; j++){
            currentWealth += accounts[i][j];
        }
        if(currentWealth > maxWealth){
            maxWealth = currentWealth;
        }
    }
    return maxWealth
};


// Problem 12: Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i,1)
            i--
        } 
    }
    return nums.length
};


// Problem 13: Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length === 0 || nums.length === 1) return false;

    nums.sort((a,b) => a - b);
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i-1]){
            return true;
        }
    }
    return false;
};


// Problem 14: Move Zeroes

/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums) {
    let pointer = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[pointer] = nums[i];
            pointer++;
        }
    }

    for(let i = pointer; i < nums.length; i++){
        nums[i] = 0;
    }
};


// Problem 15: Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function(nums1, m, nums2, n) {

    let p1 = m - 1;      
    let p2 = n - 1;    
    let p = m + n - 1;   

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};


// Problem 16: 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let output = [];
    let sortedNums = nums.sort((a,b) => a - b);
    // console.log(sortedNums)
    for(let i = 0; i < sortedNums.length; i++){
        if(nums[i] > 0){
            break;
        }
        if(nums[i] === nums[i-1]){
            continue;
        }
        let left = i+1;
        let right = nums.length - 1;
        
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                output.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left + 1]){
                    left++;
                }
                while(left < right && nums[right] === nums[right - 1]){
                    right--;
                }

                left++;
                right--
            } else if(sum < 0){
                left++;
            } else{
                right--;
            }
        }
    }
    return output;
};


// Problem 17: Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   for(let i = digits.length - 1; i >= 0; i--){
    if(digits[i] === 9){
        digits[i] = 0;
    } else {
        digits[i] = digits[i] + 1;
        return digits;
    }
   }
   digits.unshift(1);
   return digits;
};