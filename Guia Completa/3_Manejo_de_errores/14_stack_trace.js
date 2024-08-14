//.stack
console.log("This program demonstrates "
            + "stack trace in Node.js");
var err = new Error().stack
console.log(err);

//captureStackTrace
const obj = {};
Error.captureStackTrace(obj);
console.log(obj.stack);
//------------------------------
function MyNewError() {
	Error.captureStackTrace(this, MyNewError);
}

console.log(new MyNewError().stack);

//try catch
try {
	throw new Error("Error occurred");
}
catch(e) {
	console.log(e);
}

//console.trace
console.trace("hello world");

//unhandledRejection
process.on('unhandledRejection', function(err, promise) {
    console.error('Unhandled rejection',error);
});