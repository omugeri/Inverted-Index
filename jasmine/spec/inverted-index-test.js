

describe("Read book data", function(){
	it("should read the JSON file and assert its not empty", function(done){

		readJson().then(function(data){
			console.log("in test ", data);
			expect(data).toBeTruthy();
			done();
		})
	});
});

describe("Populate Index", function(){
	it("should return array of correct indices after search", function(done){
		createIndex().then(function(data){
			expect(data).toEqual(jasmine.any(Object));
			done();
		});

	});
});

describe("Verify Index", function(){
	it("verifies that the index maps correctly", function(done){

		searchIndex('and').then(function(data){
			expect(data).toEqual([0, 1]);
			done();
		});
	});
});
