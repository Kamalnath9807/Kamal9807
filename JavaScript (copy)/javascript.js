var msg = "hello this is javascript code";
var name = "kamal";
console.info(msg);
console.clear(msg);

var message = "hello this " + message + " done by";
alert("Welcome");
let x = 4;
let y = 2;
let z = x * y;
document.write(z);
console.error(message);

//function
function helicopter(code) {
  //set of statement
  var message = "hello this " + code + " done by";
  console.log(message);
}
helicopter("tell");

function add(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}
add(23, 52);

//console.table
a = 24;
b = 45;
console.table(a, b);

// console.time() and console.timeEnd() method
console.time("time");
let funtime1 = function () {
  console.log("time function");
};
let funtime2 = function () {
  console.log("time function 2");
};
funtime1(); // calling function 1
funtime2(); // calling function 2
console.timeEnd("time");

//console warning
console.warn("This is warning  message");

//spread operators

const employee = ["ramu", "jagan", "kathir", "krishna"];
const staff = ["lokesh", "vijay"];
let spread = [...employee, ...staff];
console.log(spread);