
var index = new Index();
describe("Read book data", function(){
	it("should read the JSON file and assert its not empty", function(done){

		index.readJson().then(function(data){
			console.log("in test ", data);
			expect(data).toBeTruthy();
			done();
		})
	});
});

describe("Populate Index", function(){
	it("should return array of correct indices after search", function(done){
		index.createIndex().then(function(data){
			expect(data).toEqual(jasmine.any(Object));
			done();
		});

	});
});

describe("Verify Index", function(){
	it("verifies that the right index of a word is given", function(done){
				index.searchIndex('and').then(function(data){
						expect(data).toEqual([0, 1]);
						done();
				});
	});
	it("verifies that it responds if word is not found", function(done){
		index.searchIndex('Olive').then(function(data){
			expect(data).toEqual('Word not found!');
			done();
		});
	});
});
