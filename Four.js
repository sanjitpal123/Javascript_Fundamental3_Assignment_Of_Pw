
// Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
// from a given string.
function extractDateParts(pattern, str) {
    var regex = new RegExp(pattern);
    var match = str.match(regex);
  
    if (match) {
      var day = match[1];
      var month = match[2];
      var year = match[3];
      console.log("Day:", day, "Month:", month, "Year:", year);
    } else {
      console.log("No match found.");
    }
  }
  
  
  extractDateParts("(\\d{2})/(\\d{2})/(\\d{4})", "01/25/2022");
  