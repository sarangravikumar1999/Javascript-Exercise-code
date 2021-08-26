// Write a JavaScript program to create a Clock.
// Write a JavaScript program to create a Clock.
// Note: The output will come every second.


setTimeout(Time=()=>{
    
    var time  =new Date();
    var hours = time.getHours();
    var minutes =time.getMinutes();
    var seconds =time.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`),1000

},1000)
let i=0;
while(i<5){
    Time();
}
