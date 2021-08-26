// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
// answer:

copy=(a)=>{
    result={};
    for (let key in a){
        result[a[key]] =key;
    }

}

a = { name: "sarang", age: 18 };
copy(a);


