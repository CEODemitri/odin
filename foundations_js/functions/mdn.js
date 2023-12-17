// a piece of code that does one task inside a defined block

const myText = "This is my string.";
const newText = myText.replace("my", "our");
console.log(newText);
// the replace() string function

const anArray = ["i", "love", "coding"];
const anotherText = anArray.join(" ");
console.log(anotherText);
// join() function

function printScreen(text) {
  console.log(text);
}
// custom function + parameters

printScreen("hey there");
// invoking custom function

// ReferenceError
// reference repeat of top line to make extra spae. maybe i should change my format settings.
const x = 1;

function a() {
  const y = 2;
  output(y);
}

function b() {
  const z = 3;
  output(z);
}

function output(value) {
  console.log(value);
}

output(x);
// this should output the corresponding value because x is a global scoped variable, unlike the other two, y and z

// output(y);
// this should lead to a Refernce Error, because the output function can not access the values from inside of its function

a();
b();

// next, work on Array Function
