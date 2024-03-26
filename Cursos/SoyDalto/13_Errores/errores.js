try{
	throw "error 1";
}

catch(e){
	console.log("error");
	console.log(e);
}

finally{
	console.log("otro error mas");
}