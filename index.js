function reverseWord(word){
  const wordArray= word.split("")
  const reversedWordaArray=wordArray.reverse()
  const reversedWord = reversedWordaArray.join("")
  return reversedWord


}



function isPalindrome(word) {
  const palindrome = reverseWord(word)
  if (word === palindrome){
    return true;
  }else{
    return false
  }



  // Write your algorithm here
}

/* 
  Add your pseudocode here
  should take in a word
  if word is the same in reverse
  it should return true
  else it should return false
*/

/*
  Add written explanation of your solution here
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
