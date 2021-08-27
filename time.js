// Write a JavaScript program to create a Clock.
// Write a JavaScript program to create a Clock.
// Note: The output will come every second.

Time = () => {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
};

setInterval(function(){ 
	Time();
}, 1000);
