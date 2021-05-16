// For this task - as I say each variable name I want you to say if it is Global, Local or Block scope.
// Use hand signals for each
// Open hand - Global Scope
// Three Fingers - Local Scope
// Closed Fist - Block Scope

// ===========

let a = 10;

function task() {
  let c = 0;
  for (let i = 0; i < 10; i++) {
    c++;
    let d = 24;
  }
}

// ===========

function task() {
  if (a == 10) {
    let a = 10;
  }
  let b = 0;
  function innerTask() {
    let c = 0;
  }
}

let d = 10;

// ===========

let a = true;
let b = 12313131;
let c = typeof 1938173;

if (a + b + c === typeof String) {
  let d = "Yes";
}

// ======
