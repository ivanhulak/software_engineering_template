
let ex1 = require("../src/ex1")

describe("Example 1 test suite", () => {
	
	test("object should be defined", () => {
		expect(ex1).toBeDefined()
	})
	
	test("object should have props", () => {
		
		expect(ex1).toHaveProperty('age');
		expect(ex1).toHaveProperty('name');
		expect(ex1).toHaveProperty('greet');

			
	})

})
