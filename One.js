// //Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.
function outerFunction(parameter) {
    var localVar = "I am a local variable";
    
    
    function innerFunction() {
      console.log("Parameter of outerFunction:", parameter);
      console.log("Local variable in outerFunction:", localVar);
    }
  
    
    return innerFunction;
  }
  
  
  var innerFunc = outerFunction("Hello, outer!");
  innerFunc(); 


//   In this example outerFunction defines a local variable localVar and declares an inner function innerFunction. When innerFunction is returned from outerFunction and assigned to innerFunc, it forms a closure.

// A closure in JavaScript allows a function to retain access to the variables of the outer function even after the outer function has finished executing. So, when innerFunc() is called later, it can still access both the parameter of outerFunction and the localVar variable, demonstrating the concept of lexical scoping. The inner function "closes over" the variables it references, preserving their values.