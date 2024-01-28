// Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// Create a function that searches for specific character classes in a given string and returns the matches. Test
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

function searchCharacterClass(pattern, str) {
    var regex = new RegExp(pattern, 'g');
    return str.match(regex);
  }
  
  
  var digits = searchCharacterClass("\\d", "Hello123World");
  var uppercaseLetters = searchCharacterClass("[A-Z]", "Hello123World");
  var lowercaseLetters = searchCharacterClass("[a-z]", "Hello123World");
  var specialChars = searchCharacterClass("[!@#$%^&*]", "Hello123World");
  
  console.log("Digits:", digits);
  console.log("Uppercase Letters:", uppercaseLetters);
  console.log("Lowercase Letters:", lowercaseLetters);
  console.log("Special Characters:", specialChars);
  