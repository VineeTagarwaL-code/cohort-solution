/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// brute solution that i did , then tried finding better alternative and found this which uses regex match function .... a good approach !


function countVowels(str) {
  str = str.toLowerCase();
    // Your code here
    let count = 0;
    str.split('').forEach((char)=>{

      if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        count++;
      }
    })
    return count;
}

// googled solution but definetly good
function countVowels(str) {
  str = str.toLowerCase()
const vowels = str.match(/[aeiou]/gi)

return vowels ? vowels.length : 0;
}

module.exports = countVowels;