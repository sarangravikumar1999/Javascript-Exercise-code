// Write a JavaScript function to check whether an object contains given property.
// answer:

//approach 1
checkProperty=(objectToCheck,i)=>{
  if (i === objectToCheck) {
    console.log("found");
  }

}
a = { name: "sarang", age: 18 };
key = Object.keys(a);
let objectToCheck = "age"
for (i of key) {
  checkProperty(objectToCheck,i);
  
}
// approach 2
a = { name: "sarang", age: 18 };
a.hasOwnProperty("age");




