var person1 = {name : "Aravind", age : 23}

var person2 = {name : "Keerthy", age: 22}

function sayHello(message, wish) {
	return message + " " + this.name + " " +this.age + " " + wish
}

var msg1 = sayHello.bind(person1, "Hello");
//console.log(msg1())

var msg2 = sayHello.bind(person2, "Hello", "Be Happy");
//console.log(msg2())


var msg3 = sayHello.call(person2, "Hello","Be Happy");
//console.log(msg3);

var msg4 = sayHello.apply(person2, ["Hello","Be Happy"]);
console.log(msg4);

