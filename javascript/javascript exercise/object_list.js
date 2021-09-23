// Write a JavaScript function to convert an object into a list of `[key, value]` pairs

// Answer:
a = { name: "sarang", bcd: "cde" };
key = Object.keys(a);
value = Object.values(a);
result=[];

listObject = (key, value) => {
  for (let i = 0; i < 2; i++) {
    result.push([key[i], value[i]]);
  }
};

listObject(key, value);
