class Index {

  constructor() {
      this.invertedIndex = {};
    }
    //pick data from url
  readJson(url) {
    return fetch(url).
    then(function(response) {
        return response.json()
      }). //turn data into json
    then(function(data) {
      return data;
    }).catch(function(error) {
      return false;
    });
  }

  createIndex(url) {
    var sentence = [];
    var self = this;

    return this.readJson(url).then(function(response) {
      var data = response;
      //get the documents in the json object and store the content in an array
      data.map(function(element, index) {
        var content = [];
        var titles = Object.keys(element);
        var i = 0;

        for (i = 0; i < titles.length; i++) {
          content.push(element[titles[i]]);
        }
        //split the content into words and store each word in the invertedIndex
        content.map(function(phrase) {
          sentence = phrase.toLowerCase().replace(/\W+/g, ' ').trim();
          var words = sentence.split(' ');
          for (var i = 0; i < words.length; i++) {
            if (self.invertedIndex[words[i]]) {
              if (self.invertedIndex[words[i]].indexOf(index) == -1) {
                self.invertedIndex[words[i]].push(index);
              }
            } else {
              self.invertedIndex[words[i]] = [index]; //add a new entry in the index
            }
          }
        });
      });
      return self.invertedIndex;
    });
  }

  searchIndex(query) { //checks for the index of the term given.
    var index = [];
    var answer = [];
    if (!Array.isArray(query)) {
      query = query.replace(/\W/g, ' ').split(' ');
    }
    for (var i = 0; i < query.length; i++) {
      var word = query[i].toLowerCase(); //change the word to lowercase
      if (this.invertedIndex[word] === undefined) {
        answer.push('Word not found!');
      } else {
        answer.push(this.invertedIndex[word]);
      }
      index = answer;
    }
    return index;
  }
}
