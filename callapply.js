// var person1 = {firstName: 'Marvin', age: 42, color: 'green'};
// var person2 = {firstName: 'Zaphod', age: 42000000000, color: 'peachpuff'};
// var person3 = {firstName: 'Gollum', age: 589, color: 'green'};

// var personList = [person1, person3];

// var sayHello = function() {
//  alert('Hello, ' + this.firstName);
// };

// var greetOneAnother = function(personA, personB) {
//  alert("{0}, meet {1} and {2}".supplant([this.firstName, personA.firstName, personB.firstName]));
// };


// sayHello();
// sayHello.call(person1);
// greetOneAnother.apply(person2, personList);

//Add a single event handler such that clicking on any button displays a message that says which button 
//was clicked (print the text of the button).
$(document).ready(function() {
	
	function manualHandler() {
		console.log("click");
		console.log($(this).text());
	}

	manualHandler.call($(".button1"));

	// $("button").click(function() {
	// 	console.log("click");
	// 	console.log($(this).text());
		
	// });


	//Simulate the message without clicking. invoke the event handler manually.
	
	$("button").click(manualHandler); 
		
		


}); //closes the document
