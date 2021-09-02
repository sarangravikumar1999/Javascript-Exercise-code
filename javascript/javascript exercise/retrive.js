// Write a JavaScript function to retrieve all the values of an object's properties
// answer:

retrieveValues=(...args)=>{
    console.log(Object.values(args[0]))
}
a={"name":"sarang","age":18}
retrieveValues(a);
