
var index = new Index();

describe('Read book data', function(){
		var data;
	beforeEach(function(done){
		index.readJson('../jasmine/books.json').then(function(result){
			data = result;
			done();
		});
	});
	it('should assert that false is returned if the file doesn\'t exist', function(done){
		index.readJson('../jasmine/book.json').then(function(data){
			expect(data).toBeFalsy();
			done();
		});
	});
	it('should read the JSON file and assert its not empty', function(done){
		expect(data).toBeTruthy();
		done();
	});
	it('confirms that each object contains property whose value is a string', function(done){
		var keys = Object.keys(data[1]);
		expect(typeof data[1][keys[0]]).toBe('string');
		done();
	});
});

describe('Populate Index', function(){
	it('verifies that the index is created', function(done){
		index.createIndex('../jasmine/books.json').then(function(data){
			expect(data).toEqual(jasmine.any(Object));
			done();
		});
	});

	it('verifies that the index is correct', function(done){
		index.createIndex('../jasmine/books.json').then(function(data){
			expect(data['alice']).toEqual([0]);
			expect(data['a']).toEqual([0, 1]);
			done();
		})
	})
});

describe('Search Index', function(){
	beforeEach(function(done){
		index.createIndex('../jasmine/books.json').then(function(result){
			data = result;
			done();
		});
	});
	it('verifies that the correct results of a word are given', function(){
			expect(index.searchIndex('and')).toEqual([[0, 1]]);
	});
	it('verifies that it responds if word is not found', function(){
			expect(index.searchIndex('Olive')).toEqual(['Word not found!']);
	});
	it('verifies that it can handle multiple search terms', function(){
			expect(index.searchIndex('Alice and John')). toEqual([[0],[0,1], 'Word not found!']);
	});
	it('verifies that it can handle an array search terms', function(){
			expect(index.searchIndex(['Wonderland', 'Rings'])). toEqual([[0],[1]]);
	});
});
