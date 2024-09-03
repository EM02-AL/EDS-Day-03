// Your code here...
var a = 2 
var b = 4 
var action = "sub"

function calculator () {
if (action ==='sub') return substraction()
else (action ==='add') ; return addition()
}

function addition () {
  return a + b
}

function substraction () {
 return a - b 
}

// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
} else {
	console.error("Missing/bad variables or calculator function");
}
