
function foo() {
	var data = "";
	var dest = "./data/gov-spend-2012.json"; //"./data/test.json"; //
	console.log("boop");
	$.get(dest, function(d) {console.log(d);});
	console.log(data);
	console.log("\nBop\n");
	//$("section > p").append(data);
}

foo();
