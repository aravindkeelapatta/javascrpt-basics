     /**********************************  Creating Functions   *********************************************/

     /*************** 1. Regular Functions *********************/


   function sayHello() {
   	return "Hello World !!!"
   } 

   var message = sayHello();
   //console.log(message);


   /******************** 2. Anonymous Function*************************/

   var sayAgain = function() {
   	 return "Hello Again !!!"
   }

  // console.log(sayAgain())


   /**********************3. constructor Functions *******************************/

   function Person() {
   	this.firstName = "Aravind",
   	this.lastName = "Kelapatta",
   	this.fullName = function() {
   		return this.firstName+ " " +this.lastName;
   	}
   }

   var newPerson = new Person();
   //console.log(newPerson.fullName())



   function Person1(firstName, lastName) {
   	this.firstName = firstName;
   	this.lastName = lastName;
   }

   Person1.prototype.fullName1 = function() {
   		return this.firstName + " " + this.lastName;
   	}

   var newPerson1 = new Person1("aru", "Kelapatta");
   var newPerson2 = new Person1("chai", "sam");
   var newPerson3 = new Person1("keerthy", "suresh");

   // console.log(newPerson1.fullName1())
   // console.log(newPerson2.fullName1())
   // console.log(newPerson3.fullName1())



   /******************************4.self Invoking Function****************************************/


   // (function(message) {
   // 	 console.log("Hello Aravind " + message)
   // })("Ara aravind ala unnav")

   