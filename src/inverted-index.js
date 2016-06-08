function readJson() {
	return fetch('../jasmine/books.json').
		then(function(response){
		return response.json()}).
		then(function(data){
			return data;
		}).catch (function(error){
			throw error;
	});
}

function indexCreate(){
	var indarray = [];
	return readJson().then(function(response){
		var data = response;
		data.map(function(element, index){
			var titles = Object.keys(element);//[title,text]
			indarray.push('Index: ' + index + ', title: ' + element[titles[0]]);

		});
		return indarray;
		
	});
}
