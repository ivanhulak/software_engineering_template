let ex9 = require("../src/ex9")

describe("Example 9 test suite", () => {
	
	test("class Animal should be defined", () => {
		expect(ex9).toBeDefined()
	})
	
	test("object should have static type", () => {
		
		expect(ex9).toHaveStatictype('Animal');
		expect(ex9).toHaveProperty('name');
		expect(ex9).toHaveProperty('age');
		expect(ex9).toHaveProperty('hasTail');
			
	})

})