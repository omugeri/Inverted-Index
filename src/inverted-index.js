

function readjson(){
	return fetch("../jasmine/books.json").then(function(response){
		return response.json();
	})
	.catch(function(err){
		console.log('There has been a problem with your fetch operation: ' + err);
		return false;
	});
}

function indexCreate(){
	var index=[];
	return fetch('../jasmine/books.json').then(function(response) {
		console.log('I am def');
		return response.json();
	}).catch(function(error) {
		return 'There was an error'
	});
	// fetch("../jasmine/books.json").then(function(response){
	// 	response.json().then(function(data){
	// 	data.map(function(x, y){
	// 		//console.log("Index: "+ y +", title: " + x.title);
	// 		index.push("Index: "+ y +", title: " + x.title);

	// 	});
	// 	console.log(index);
	// 	return index;
		
	// });
		

	// })
	// .catch(function(err){
	// 	console.log('There has been a problem with your fetch operation: ' + err);
	// 	return false;
	// });
    // return 'abc'
	
}