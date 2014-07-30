
function foo() {
	var data = "";
	var dest = "./data/gov-spend-2012.json";// "./data/test.json"; //
	$.getJSON(dest, function(data) 
					{
						console.log(data);
					});
	console.log("END");
	// console.log(data);
	//$("section > p").append(data);
}

foo();
