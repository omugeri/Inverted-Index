class Index {

	constructor(){
		this.invertedIndex = {};
	}

	readJson( url ) {
			return fetch( url ).//pick data from url
				then(function( response ){
				return response.json()
			}).//turn data into json
				then(function( data ){
					return data;							//give results as a promise
				}).catch (function( error ){
					throw error;
			});
		}

	createIndex( url ){
		var sentence = [];
		var self = this;

		return this.readJson( url ).then(function( response ) {
			var data = response;
			data.map(function( element, index ) {//get the documents in the json object
				var content = [];
				var titles = Object.keys( element );//get the keys in each object of the json file
				var i=0;

				for (i = 0; i < titles.length; i++) {
					content.push( element[titles[i]] );	//store the content of each object.
				}

				content.map(function( phrase, indexOfPhrase ) {
					//replace all special characters with space and change to lowercase
					sentence = phrase.toLowerCase().replace( /\W/g, ' ' ).replace( /\s+/g, ' ' ).trim();
					var words = sentence.split(' ');//split the sentence into words
					for ( var i=0; i<words.length; i++ ) {
						if( self.invertedIndex[words[i]] ) {//check if the word exists in the index
							if( index !== self.invertedIndex[words[i]].value ) {
								self.invertedIndex[words[i]].push( index );//add another value in the index
							}
						}
						else {
							self.invertedIndex[words[i]] = [index];//add a new entry in the index
						}
					}
					// make the elements in the array unique
					for( var j=0; j<words.length; j++ ) {
						var set = new Set( self.invertedIndex[words[j]] );
						self.invertedIndex[words[j]] = Array.from( set );
					}
				});
			});
			return self.invertedIndex;
	 });
	}
	getIndex( title ) {//get the whole index.
		return self.invertedIndex;
	}

	searchIndex( query ) {//look for a specific entry in the invertedIndex
		var index = [];
		var answer = [];
		if( Array.isArray( query ) ) { //check if the query is an array.
			for( var i=0; i<query.length; i++ ) {//loop through the array
				var word = query[i].toLowerCase(); //change the word to lowercase
				if(this.invertedIndex[word] === undefined){
					return 'Word not found!';
				}
				else {
					answer.push( this.invertedIndex[word] );
				}
				index = answer;
			}
			return index;
		}
		else {
			var words = query.toLowerCase().replace( /\W/g, ' ' ).split(' ');//remove special characters and split if its a sentence
			for( var i=0; i<words.length; i++ ) {//loop through the sentence
				// answer = findIndex( words[i] );	//each word to the findIndex method
				if(this.invertedIndex[words[i]] === undefined){
					return 'Word not found!';
				}
				else {
					answer.push( this.invertedIndex[words[i]] );
				}
				index = answer;
			}
			return index;	//return the results
		}
	}

	findIndex( term ) {	//checks for the index of the term given.
		term = term.toLowerCase();
		var index = [];
		if( this.invertedIndex[term] === undefined ) {
			return 'Word not found!';
		}
		else {
			index.push( this.invertedIndex[term] );
			return index;
		}
	}
}
