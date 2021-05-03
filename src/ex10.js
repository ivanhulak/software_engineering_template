class Animal {

	static type = 'ANIMAL'

	constructor (options){
		this.name = options.name
		this.age = options.age
		this.hasTail = options.hasTail
}
	voice () {
		console.log("I am an Animal")
	}
}

// const animal = new Animal({
// 	name: 'Animal',
// 	age: 5,
// 	hasTail: true
// })


class Cat extends Animal {}

const cat = new Cat({
	name: 'Cat',
	age: 7,
	hasTail: true
})