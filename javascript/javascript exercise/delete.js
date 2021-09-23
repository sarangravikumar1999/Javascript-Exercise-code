// Write a JavaScript program to delete the rollNo property from the following object. Also print the object before or after deleting the property.var

var student = {
  "name": "David Ray",
  "sClass": "VI",
  "rollNo": 12,
};

deleteProperty =(...args)=>{
  delete args[0].rollNo;
}
deleteProperty(student);