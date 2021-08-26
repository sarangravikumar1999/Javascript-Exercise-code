// Write a JavaScript program to list the properties of a JavaScript object.

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
// Sample Output: name,sclass,rollno

// Answer:
listObject=(...args)=>{
console.log(Object.keys(args[0]))
}

listObject(student);

