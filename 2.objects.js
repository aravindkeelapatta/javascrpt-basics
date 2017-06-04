// Creating Objects

// var obj1 = new Object();
// console.log(obj1);

//  var obj2 = {};
//  console.log(obj2);

//  var obj3 = Object.create(null);     // null is prototype
//  console.log(obj3);


//  function Person() {

//  }

//  var obj4 = new Person();
//  console.log(obj4);




// function() {
//  var message = " Hello World";

// }

// Adding Properties to the object

var obj = {

	id : 1
};

obj["name"] = "Asha";
obj.city = "Bangalore";

Object.defineProperty(obj, 'state', {
	value : 'KA'
})

Object.defineProperty(obj, 'country', {
	value: 'india'
})


delete obj.city;

//console.log(obj);


              /*******  Modying Objects  **********/

//1. PreventExtensions()

/*
    1. It will allows to modify existing property
    2. It will delete exiting property
    3. It won't allow to add new property
*/

var person1 = {name : "aravind", age : '23'}

Object.preventExtensions(person1)

person1.name = "kohli";

person1.city = "Bangalore";

delete person1.age;

//console.log(person1)



//2. Seal

/*
    1. It will allows to modify existing property
    2. won't allow to delete exiting property
    3. It won't allow to add new property
*/

var person2 = {name : "aravind", age : '23'}

Object.seal(person2)

person2.name = "kohli";

person2.city = "Bangalore";

delete person2.age;

//console.log(person2)


//2. Freeze

/*
    1. won't allows to modify existing property
    2. won't allow to delete exiting property
    3. It won't allow to add new property
*/

var person3 = {name : "aravind", age : '23'}

Object.freeze(person3)

person3.name = "kohli";

person3.city = "Bangalore";

delete person3.age;

//console.log(person3)



                  /*************  Adding properties and methods to object   ***************/

 
   var person = {
   	   firstName : "Aravind",
   	   lastName : "Keelapatta",
   	   fullname : function() {
   	   	return this.firstName +" " +this.lastName;
   	   }
   }

   var firstName = person.firstName;
   var fullName = person.fullname();
   console.log(fullName);
   console.log(fullName);



   /********************   Get Keys from an object    **********************/

   var customer = {
   	name : "Aravind",
   	city : "Bangalore",
   	role : "Software DEveloper",
   	age : 23
   }

   var keys = Object.keys(customer);
   console.log(keys);

   var values = Object.values(customer);
   console.log(values);




