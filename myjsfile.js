
var f=function f(){ 
consol.log("JavaScript Test!");
}


var selfDefining = function()
{
	promt("some really heavy initialization occured");
	console.log("yeah!");
	selfDefining = function(){
		console.log("job done!");
	}
}

function Hello() {
   alert("Hello, World");
}