<<<<<<< HEAD
# inverted-index
=======
## Introduction

The Inverted Index keeps track of every word and in which object it appears.

## Code example
`self.invertedIndex[words[i]] = [index];`
>>this is used to insert the location of a word into the Inverted Index.

`readJson(url) {
    return fetch(url).
      then(function(response) {
      return response.json()
    }).//turn data into json
      then(function(data) {
        return data;
      }).catch (function(error) {
        return false;
    });
  }
`
>>This is used to read data from a given url.

## Requirements
the index requires you to run a server in the root folder.
The tests are run on jasmine and therefore a browser is needed.

## Configuration
The index contains no menu or modifiable settings. There is no Configuration.

## Troubleshooting
in case of any failure to run Inspect element in the browser and check the console.

## Tests
The tests are run with Jasmine on the browser with a server running in the root folder.

## Motivation
Inverted Index is used as Checkpoint 1 in the javascript curriculum.
