var get = $.when();


function data_load() {
	var d = "";
	var dest = "./data/gov-spend-2012.json";// "./data/test.json"; //
	$.ajax({
		url:dest,
		dataType:'json',
		data:"",
		async:false,
		success: function (data) {
			d = data;
		}});
	return d;
}

//console.log(data_load());
