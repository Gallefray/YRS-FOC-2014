
function foo() {
	var data = "";
	var dest = "./data/gov-spend-2012.json"; //"./data/test.json"; //
	$.getJSON(dest, function(d) 
					{
						data = d;
					});
	console.log(data);
	//$("section > p").append(data);
}

foo();
