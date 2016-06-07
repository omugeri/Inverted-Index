
describe("Read book data", function(){
	it("should read the JSON file and assert its not empty", function(done){
		readjson().then(function(data){
			//console.log("in test ", data);
			expect(data).toBeTruthy();
			done();
		})
	});
});

describe("Populate Index", function(){
	it("should return array of correct indices after search", function(done){
		console.log('The function is ' + indexCreate());
		indexCreate().then(function(data){
		console.log("in test ", data);
		expect(data).toBe(["Index: 0, title: Alice in Wonderland.", 
			"Index: 1, title: The Lord of the Rings: The Fellowship of the Ring."]);
		done();
		});
		
	});
});