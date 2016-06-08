

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
			expect(data).toEqual(["Index: 0, title: Alice in Wonderland.", 
				"Index: 1, title: The Lord of the Rings: The Fellowship of the Ring."]);
			expect([1]).toEqual([1]);
			done();
		});
		
	});
});