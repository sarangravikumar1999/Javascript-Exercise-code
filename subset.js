// Write a JavaScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
// Answer:
var result=[];
for(let i=0;i<data.length;i++){
    for (let j=i+1;j<=data.length;j++){
        result.push(data.slice(i,j));
    }
}
