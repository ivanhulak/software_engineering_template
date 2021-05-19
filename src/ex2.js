/**
* Создаём объект person с такими полями:
* @param {string} name Имя
* @param {number} age Возраст
* @param {function} greet Функция, которая выводит в консоль слово Greet
*/
const person = new Object({
	name: 'Maxim',
	age: 25,
	greet: function(){
		console.log("Greet!")
	}
})
/**
* В главном обьекте Object создаём функцию sayHello, которая выводит в консоль строку Hello!
* @param {function} sayHello
* @return {string} Hello!
*/
Object.prototype.sayHello = function(){
		console.log("Hello!")
}