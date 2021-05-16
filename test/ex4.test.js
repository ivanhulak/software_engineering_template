let ex4 = require("../src/ex4")

describe("Example 4 test suite", () => {
	
	test("object should be defined", () => {
		expect(ex4).toBeDefined()
	})
	
	test("object should have props", () => {
		
		expect(ex4).toHaveProperty('age');
		expect(ex4).toHaveProperty('name');
		expect(ex4).toHaveProperty('greet');

			
	})

	test("lena should be defined", () => {
		expect(ex4).toBeDefined()
	})

	test("lena should have props", () => {

		expect(ex4).toHaveProperty('name');

	})
})