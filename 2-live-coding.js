// These examples should be live coded (not copy and pasted)

// ============

let a = 10;
console.log(a);

if (a == 10) {
  a++;
}

console.log(a);

// ==============

let a = 10;
console.log(a);

if (a == 10) {
  let b = 10;
}

console.log(a);
console.log(b);

// ===============

// Global Scope
let a = 10;
console.log(a);

// Local Scope
function calculate(x, y) {
  let result = x + y;
  return result;
}

// Block Scope
if (a == 10) {
  let b = 20;
}

calculate(2, 3);

console.log(a);
console.log(b);
console.log(result);

// =============

var firstName = "Sigma";
var scope1 = function () {
  var scope2 = function () {
    var scope3 = function () {
      let lastName = "Labs";
    };
  };
};

// ==============

let money = 10;

function calculateSpecialInterest(money) {
  let interest = 0.2;
  return money + money * interest;
}

function calculateNormalInterest(money) {
  let interest = 0.1;
  return money + money * interest;
}

let specialResult = calculateSpecialInterest(money);
let normalResult = calculateNormalInterest(money);

console.log(specialResult);
console.log(normalResult);
