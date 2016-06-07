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
			indarray.push('Index: ' + index + ', title: ' + element.title);

		});
		return indarray;
		
	});
}
