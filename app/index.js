// let wizard = {magical: true, power: 10};
// let magical = wizard.magical;
// let power = wizard.power;
// let { magical, power } = wizard;
// console.log(magical, power);


let magical = true;
let power = 1;

let ranger = { magical: false, power: 9 };
({ magical, power } = ranger);
console.log(magical, power);

/*
  Destructuring objects assigns declares a variable
  with the name specified in the destructure and
  assigns it to the value of the key value pair in the object
  on the right-hand side of the assignment where the key is the same
  as the newly defined variable
*/
