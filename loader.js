
function getfile(filename)
{
	return $.get(filename, function (data) {
		console.log(data);
	});
}

getfile("data/oscar.csv");
console.log("Hello world");
