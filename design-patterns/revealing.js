var Revealing = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log("Inside a private method!");
    privateVariable++;
  };

  var methodToExpose = function() {
    console.log("This is a method I want to expose!");
  };

  var otherMethodIWantToExpose = function() {
    privateMethod();
  };

  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose
  };
})();

Revealing.first(); // Output: This is a method I want to expose!
Revealing.second(); // Output: Inside a private method!
Revealing.methodToExpose; // undefined
