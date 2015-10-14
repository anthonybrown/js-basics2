var result = document.getElementById('result');

function foo1(n) {
	result = document.getElementById('result');
	return result.innerHTML += 'foo called with ' + n + '<br>';
}

foo1(2);

function foo1(n) {
	result = document.getElementById('result');
	return result.innerHTML += 'foo redefined with ' + n + '<br>';
}

foo1(2);

var foo = function (n) {
	result2 = document.getElementById('result2');
	return result2.innerHTML += 'foo called with ' + n + '<br>';
}

foo(2);

foo = function (n) {
	result2 = document.getElementById('result2');
	return result2.innerHTML += 'foo redefined with ' + n + '<br>';
}

foo(3);

var max = function (a,b) {
	if (a > b)
		return a
	return b
}

var result3 = document.getElementById('result3');

result3.innerHTML += 'The result of max(8 ,9) is ' + max(7, 9, 99) + '<br /><br />';

var args = function () {
	var large = arguments[0];
	var i;
	for (i = 0; i < arguments.length; i++) {
		if (large < arguments[i])
			large = arguments[i]
	}
	return large;
}

results.innerHTML += 'the result for args(3, 4) are: '     + args(3, 4)     + '<br>';
results.innerHTML += 'the result for args(7, 5) are: '     + args(7, 5)     + '<br>';
results.innerHTML += 'the result for args(8, 9) are: '     + args(8, 9)     + '<br>';
results.innerHTML += 'the result for args(8, 9, 89) are: ' + args(8, 9 ,89) + '<br>';

console.log(args(3,4));
console.log(args(7, 5));
console.log(args(8, 9));

//result3.innerHTML += 'This is the result of the large variable ' + args(3, 7, 5) + '<br>';

// Let's talk about this
var output = document.getElementById('output');

var baz = function (a, b) {
	console.log(this);
	console.log(a + " " + b);
	return this +' ' + a + ' ' + b;
}

output.innerHTML += 'the output of the this keyword ' + this + '<br />';
output.innerHTML += 'the result of baz(1,2) ' + baz(1, 2)+'<br>';
output.innerHTML += 'the result of baz.apply("hello ", [3,4]) ' + baz.apply('hello ', [3, 4])+'<br>';
output.innerHTML += 'the result of baz.call() ' + baz.call('howdy there', 3, 4)+'<br />';

//output.innerHTML += 'the this variable is saying ...' + baz.apply("Hello", [3, 4]);

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(list.filter(function (e) {
	return e % 2 === 0;
}));

output2.innerHTML += 'list.filter(function (e) { return e % 2 === 0 }); is '+'<br />' +
list.filter(function(e) {
		return e % 2 === 0;
});

// Creating objects
var ll   = document.getElementById('list');
var list = document.createElement('LI');
ll.appendChild(list);
list.innerHTML += 'I am a list created with just js';

var button = document.createElement("BUTTON");
ll.appendChild(button);
button.innerHTML += 'I am a button<br>I was created with js';
// simple obect
var sam = {
	first: 'Sam',
	last:  'Walker',
	sing: function () {
		console.log(this.first +' is...singing...');
		return sam;
	}
};


console.log(sam);

console.log(sam.sing());


// Just for demo purposes
// Once you know what's going on
// here, you can decide wether to
// use this in your style or not

//var foobar = { year: 0 };
//console.log(foobar);
//Car.call(foobar, '2015');
//console.log(foobar);


var Bike = function (year) {
	console.log('Bike called...');
	this.year = year;
}

Bike.prototype.km = 0;
Bike.prototype.drive = function (dist) {
	console.log('driving a new ' + this.year + ' model bike');
	this.km = this.km + dist;
}

var bike1 = new Bike(2015);
var bike2 = new Bike(2016);
//console.log(car1);
//console.log(car2);

console.log('bike1.km = '+ bike1.km);
console.log('bike2.km = '+ bike2.km);

bike1.drive(120);
console.log('bike1 drove ' + bike1.km);
console.log('bike2 drove ' + bike2.km);
// gets are deep
// sets are shallow

/*
	The above does 3 things (when called new)
	1. It allocates memory for the instance car
	2. It then calls the method Car.call(car, 2015);
	3. Assigns car.__proto__ = Car.prototype
*/

// it's easier to make a 'class'
// from the constructor function
// This is a class in JavaScript
var Car = function (config) {
	console.log(' class Car constructor called...');
	this.year  = config.year;
	this.model = config.model;
	this.color = config.color;
	this.type  = config.type;
	return this;
}

Car.prototype.display = function () {
	return 'This new car is a ' + this.color + ', ' + this.year + ', ' + this.model + ' ' + this.type;
}

var car = new Car({
	year :'2016',
	model:'Lexus',
	color:'Pearl',
	type :'X11'
});

var car2 = new Car({
	year : '1967',
	model: 'Pontiac',
	color: 'Maroon',
	type : 'Firebird'
});

console.log(car.display());

var cartxt = document.getElementById('car');
cartxt.innerHTML += car.display()+'<br />';
cartxt.innerHTML += car2.display()+'<br />';
// a better way

