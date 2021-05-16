// 1.
function one() {
  var a = 10;
}
one();
console.log(a); // what is the value of a

// 2.
let money;
function giveMoney() {
  money = 25;
}
two();
console.log(money); // what is the value of money and why

// 3.
let total = 0;
function three() {
  let total = 10;
  if (total === 0) {
    let total = 20;
  }
}

three();
console.log(total); // what is the value of total and why

// 4.
function four() {
  if (true) {
    let f = 50;
  }
  console.log(f); // what is the value of f and why
}

four();

// 5.
let e;
function five() {
  const greeting = "Hello";

  function greet() {
    let name = "Eddie";
    e = `${greeting} ${name}`;
  }
  greet();
}
five();
console.log(e); // what is the value of e and why
