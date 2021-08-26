// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
// answer:
a = { name: "sarang", age: 18 };
value = Object.values(a);
key = Object.keys(a);
value.forEach((value, i) => (result[value] = key[i]));
