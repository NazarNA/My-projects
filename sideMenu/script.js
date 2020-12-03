function openMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}


$('#add-text').click(function(){
    $('body').append('<p>Hello World!</p>');
});


function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.greet = function greet(){
    console.log(`Hello from ${this.name}`)
    };
}    

class Animal 

let nazar = new Person("Nazar", 23, 'male');
console.log(nazar);
nazar.greet();
// Object.prototype.sayHi = function(){
// 	console.log('Hi! ' + this.name)
// }

// const kate = Object.create(person);
// kate.name = 'Kate';
// kate.age = 17;

// function hello(){
// 	console.log('Hello ' + this)
// };


// Object.prototype.logKeys = function(){
// 		for(let key in this){
// 		console.log('key: ' + key)
// 		console.log('value: ' + this[key])
// 	};
// };

