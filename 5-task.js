/* Scope Task

Below, you will find a solution to a previous weeks coursework. You should follow the below instructions and insert variables at the correct scope

1. Add a locally scoped variable named "password" with the value "thisismypassword". 
2. Add a globally scoped variable named "morePasswords" with the value of an array possible passwords
3. Add a block scoped variable named "block" and containing the number 1331341

*/

/////////////////////////////

/* 
Password Validation
Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.
To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
Passwords must not be any previous password in the passwords array. 
Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];
Expected Result:
PasswordValidationResult=  [false, false, false, false, true]
*/

function validatePasswords(passwords) {
  return passwords.map((password, index, passwords) => {
    const patterns = [/.{5,}/, /[A-Z]/, /[a-z]/, /[0-9]/, /[!#$%.*&]/];
    if (!patterns.every((pattern) => pattern.test(password))) {
      return false;
    }
    return index === passwords.indexOf(password);
  });
}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"];
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
);

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);
