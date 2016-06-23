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
      //get the documents in the json object and store the content in an array
      response.map(function(element, index) {
        var content = [];
        var titles = Object.keys(element);
        var i = 0;

        titles.forEach(function(title) {
          var phrase = element[title];
          var words = phrase.toLowerCase().replace(/\W+/g, ' ').trim().split(' ');
          words.forEach(function(word){
            if (self.invertedIndex[word]) {
                  if (self.invertedIndex[word].indexOf(index) === -1) {
                    self.invertedIndex[word].push(index);
                  }
            }
            else {
                  //add a new entry in the index
                  self.invertedIndex[word] = [index];
            }
          });
        });
      });
      return self.invertedIndex;
    });
  }

//checks for the index of the term given.
  searchIndex(query) {
    var self = this;
    var index = [];

    if (!Array.isArray(query)) {
      query = query.replace(/\W/g, ' ').split(' ');
    }
    query.forEach(function(word){
      word = word.toLowerCase();
      if (!self.invertedIndex[word]) {
        index.push(-1);
      } else {
        index.push(self.invertedIndex[word]);
      }

    });

    return index;
  }
}
