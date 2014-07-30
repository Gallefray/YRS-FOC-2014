var get = $.when();


function data_load() {
	var dest = "./data/gov-spend-2012.json";// "./data/test.json"; //
	get = get.pipe(function () {
						$.getJSON(dest, function(data) 
						{
							d = data; // Doesn't work! D:
						});
					});
	get.done(function () {
		console.log(d);
	});
	$.ajax({
		url:dest,
		dataType:'json',
		data:data,
		async:false,
		success: function () {
			return data;
		}
}

console.log(data_load());
