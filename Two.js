
// //Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.
function matchWithPattern(pattern, str) {
    var regex = new RegExp(pattern);
    return regex.test(str);
  }
  
  
  var result = matchWithPattern("\\d{3}-\\d{2}-\\d{4}", "123-45-6789");
  console.log(result); 
  