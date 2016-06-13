

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
		indexCreate().then(function(data){
			expect(data).toEqual([ [ [ 'Alice', 'in', 'Wonderland.' ], 0 ], [ [ 'Alice', 'falls', 'into', 'a', 'rabbit', 'hole', 'and', 'enters', 'a', 'world', 'full', 'of', 'imagination.' ], 0 ], [ [ 'The', 'Lord', 'of', 'the', 'Rings:', 'The', 'Fellowship', 'of', 'the', 'Ring.' ], 1 ], [ [ 'An', 'unusual', 'alliance', 'of', 'man,', 'elf,', 'dwarf,', 'wizard', 'and', 'hobbit', 'seek', 'to', 'destroy', 'a', 'powerful', 'ring.' ], 1 ] ]);
			done();
		});

	});
});

describe("Verify Index", function(){
	it("verifies that the index maps correctly", function(done){

		getIndex('Alice').then(function(data){
			expect(data).toEqual([0]);
			done();
		});
	});
});
