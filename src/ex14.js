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


class Cat extends Animal {

	static type = 'CAT'

	constructor(options){
		super(options)
		this.colour = options.colour
	}
	
	voice(){
		super.voice()
		console.log("I am a cat")
	}
	
	get ageInfo(){
		return this.age
	}
}


const cat = new Cat({
	name: 'Cat',
	age: 7,
	hasTail: true,
	colour: "black"
})