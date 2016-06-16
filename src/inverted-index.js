class Index {
	readJson() {
			return fetch('../jasmine/books.json').
				then(function(response){
				return response.json()}).
				then(function(data){
					return data;
				}).catch (function(error){
					throw error;
			});
		}

	createIndex(){
		var bookarray = {};
		var sentence = [];
		return this.readJson().then(function(response) {
			var data = response;
			data.map(function(element, index) {
				var content = [];
				var titles = Object.keys(element);//[title,text]
				var i=0;

				for (i = 0; i < titles.length; i++) {
					content.push(element[titles[i]]);
				}

				content.map(function(phrase, indexOfPhrase) {
					//replace all special characters with space and change to lowercase
					sentence = phrase.toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, ' ').trim();
					var words = sentence.split(' ');//split the sentence into words
					for (var i=0; i<words.length; i++) {
						if(bookarray[words[i]]) {
							if(index !== bookarray[words[i]].value) {
								bookarray[words[i]].push(index);
							}
						}
						else {
							bookarray[words[i]] = [index];
						}
					}
					// make the elements in the array unique
					for(var j=0; j<words.length; j++) {
						var set = new Set(bookarray[words[j]]);
						bookarray[words[j]] = Array.from(set);
					}
				});
			});
			return bookarray;
	 });
	}
	getIndex(url){
		this.createIndex().then(function(response){
			var index = console.log(response);
		})
	}

	searchIndex(word){
		return this.createIndex().then(function(response) {
			if(response[word] === undefined){
				return 'Word not found!';
			}
			else {
				var index = response[word];
				return index;

			}
		});
	}
}
