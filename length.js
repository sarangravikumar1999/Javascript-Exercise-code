// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
// Answer:
let count = 0;

for (let i in student) {
  count++;
}
