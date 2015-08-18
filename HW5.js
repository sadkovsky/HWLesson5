alert("My 5th homework!");

var color = "red";
var car = " BMW";
var result = color + car;

console.log(result);

var num1 = 10;
var num2 = 15;
var result = num1 + num2;

console.log(result);



var colors = ["red", "black", "blue"];
var cars = ["GMC", "Ford", "Acura"];
	

var colorsCars = [ ["CMC", "Ford", "Acura"], ["red", "black", "blue"] ]

for (var i = 0; i < 2; i++) {
for (var j = 0; j < 2; j++) {
console.log( colorsCars [i][j]  );
}
}


var car = { marke: "BMW", model: "x5", isModel: true };

// console.log(car.isModel); 
// console.log(car.model); 

console.log("X5 is a " + car.marke + ".");



var less = 18

if (less < 16) {
console.log ("you"+less+" can't drive!!!");
}
if (less > 16) {
	console.log ("you are "+less+" you can drive!!!");
	}



function MyName(name) {
  return alert(name);
}

MyName("Ivan");

function lotteryPicking(lotery) {
  if (lotery === 1) {
    console.log("You are looser");
  } else if (lotery === 2) {
    console.log("you should not spend money on this");
  } else if (lotery === 3) {
    console.log("you Win!");
  } else {
    console.log("go to work!");
  }
}

lotteryPicking(6);


function Numbers(num1, num2) {
  return num1 + num2;
}

var x = 7;
var y = 3;

var result = Numbers(x, y);

console.log(result);
