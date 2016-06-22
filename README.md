# Inverted Index
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

### installing `http-server`
Due to security reasons javascript cannot read files stored in a user's hard disk,
hence we need to run it in a server.
To do this install the `npm` package `http-server` by:

1. visit https://nodejs.org/ and follow the instructions to install `node`.
2. Follow the instructions at https://docs.npmjs.com/getting-started/fixing-npm-permissions
to be able to install `npm` package globally without providing the root password
3. From a terminal run the following command
`npm install -g http-server`

If you are on OSX you do not have to install the http-server. just navigate to the root folder
on the terminal and run the already installed python server by running the following command.
`python -m SimpleHTTPServer 8000`. you can replace the 8000 with any port number not in use.

### installing `Git`

To clone the repository, you need to install `git`.
Follow the instructions at https://git-scm.com/book/en/v2/Getting-Started-Installing-Git to
do this.

### How to Download and Run.

On your terminal run the following commands:

```
git clone https://github.com/andela-omugeri/Inverted-Index.git

cd Inverted-Index

http-server
```

From a browser navigate to `127.0.0.1:8000/SpecRunner.html`. The test should run.


## Motivation
Inverted Index is used as Checkpoint 1 in the javascript curriculum.
