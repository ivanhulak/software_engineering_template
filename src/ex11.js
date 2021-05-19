/**
* Создаём класс Animal
* У него есть статическое поле type
* @param {string} type Статическое поле под значением ANIMAL
* @param {object} constructor Создаём конструктор, который будет создавать обьекты с полями name, age, hasTail
* @param {function} voice Создаём функцию voice()
* @return {string} Возвращает строку: "I am an Animal"
*/
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

/**
* Создаём класс Cat, который есть наследником класса Animal 
* Используем метод extends для того чтобы создать класс наследоваясь от другого класса
* У него есть статическое поле type
* @param {string} type Статическое поле под значением Cat 
*/
class Cat extends Animal {

	static type = 'CAT'
}
/**
* Создаём обьект cat
* у обьекта cat есть такие поля:
* @param {string} name Имя Cat
* @param {number} age Возраст 7 лет
* @param {boolean} hasTail Есть хвост? Да
*/
const cat = new Cat({
	name: 'Cat',
	age: 7,
	hasTail: true
})