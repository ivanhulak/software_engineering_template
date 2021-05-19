const person = new Object({
	name: 'Maxim',
	age: 25,
	greet: function(){
		console.log("Greet!")
	}
})

Object.prototype.sayHello = function(){
		console.log("Hello!")
}
/**
* Создаём обьект lena через метод create 
* @param {object} lena
* Дописываем поле name обьекту lena
* @param {string} name поле name теперь имеет значение Elena 
*/
const lena = Object.create(person)
lena.name = 'Elena'