
var index = new Index();
var type = '';
describe("Read book data", function(){
	it("should read the JSON file and assert its not empty", function(done){
		index.readJson('../jasmine/books.json').then(function(data){
			expect(data).toBeTruthy();
			done();
		});
	});
	it("confirms that each object contains property whose value is a string", function(done){
		index.readJson('../jasmine/books.json').then(function(data) {
			var type = false;
			keys = Object.keys(data[1]);
			expect(typeof data[1][keys[0]]).toBe(typeof 'example');
			done();
		});
	});
});

describe("Populate Index", function(){
	it("verifies that the index is created", function(done){
		index.createIndex('../jasmine/books.json').then(function(data){
			expect(data).toEqual(jasmine.any(Object));
			done();
		});
	});

	it('verifies that the index is correct', function(done){
		index.createIndex('../jasmine/books.json').then(function(data){
			expect(data['alice']).toEqual([0]);
			done();
		})
	})
});

describe("Search Index", function(){
	it("verifies that the correct results of a word are given", function(done){
						expect(index.searchIndex('and')).toEqual([[0, 1]]);
						done();
	});
	it("verifies that it responds if word is not found", function(){
			expect(index.searchIndex('Olive')).toEqual('Word not found!');
	});
	it("verifies that it can handle multiple search terms", function(){
			expect(index.searchIndex('Alice and Wonderland')). toEqual([[0],[0,1], [0]]);
	});
	it("verifies that it can handle an array search terms", function(){
			expect(index.searchIndex(['Alice', 'Rings'])). toEqual([[0],[1]]);
	});
});
