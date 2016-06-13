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
	var bookarray = [];
	var sentenceArray = [];
	var wordArray = [];
	return readJson().then(function(response){
		var data = response;
		data.map(function(element, index){
			var content = [];
			var titles = Object.keys(element);//[title,text]
			var i=0;
			indarray.push('Index: ' + index + ', title: ' + element[titles[0]]);

			for (var i = 0; i < titles.length; i++) {
				content.push(element[titles[i]]);
			}

			content.map(function(phrase, indexOfPhrase) {
					bookarray.push([phrase.split(' '), index]);
			});
		});

	 	return bookarray;
 });
}

function getIndex(word){
	return indexCreate().then(function(response){
		var index = [];
		var i=0, j=0, count=0;
		for(i=0; i<response.length; i++){//loop through the index
			sentence = response[i][0];
			 console.log(response);
			for(j=0; j<sentence.length; j++) {
				// console.log('word is: ', word);
				// console.log('word being read is: ', String(sentence[j].split(',')));
				while (count==0){
					if( word == sentence[j].split(',')){
						index.push(response[i][1]);
						count ++;
					}
				}

			}

		}
		return index;

	});

}
