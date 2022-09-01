function isPalindrome(word) {
  // Write your algorithm here
const oneDromos = word.split('');
const anotherDromos = oneDromos.reverse();
const reversedDromos = anotherDromos.join('');
if (word === reversedDromos){
  return true;
} else {
  return false;
}
}
console.log (isPalindrome('wow'))
/* 
  Add your pseudocode here...
  pass one argument to isPalindrome function
  use strict operator to find the words that are palindromes and those that aren't
  convert provided word to letters (string) using .split()
  check if the string reads the same backwards by reversing the string
  return true
  else return false
*/

/*
  Add written explanation of your solution here...
reverse the word and compare the two to return either true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
