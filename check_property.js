// Write a JavaScript function to check whether an object contains given property.
// answer:
a = { name: "sarang", age: 18 };
key = Object.keys(a);
for (i of key) {
  if (i === "age") {
    console.log("found");
  }
}
