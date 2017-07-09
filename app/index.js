// let wizard = {magical: true, power: 10};
// let magical = wizard.magical;
// let power = wizard.power;
// let { magical, power } = wizard;
// console.log(magical, power);


// let magical = true;
// let power = 1;
//
// let ranger = { magical: false, power: 9 };
// ({ magical, power } = ranger);
// console.log(magical, power);

/*
  Destructuring objects assigns declares a variable
  with the name specified in the destructure and
  assigns it to the value of the key value pair in the object
  on the right-hand side of the assignment where the key is the same
  as the newly defined variable
*/

/*
Arrow Functions
-> Anonymous by default
-> Anonymous functions usually don't have a named identifier
*/

// function blastoff() {
//   console.log('3..2..1..blastoff');
// }
//
// blastoff();
//blastoff is the named identifier

// setTimeout(() => {
//   console.log('3..2..1..blastoff');
// }, 1000);

// const blastoff = () => {
//   console.log('3..2..1..blastoff');
// };
//
// blastoff();

/*
  Arrow functions do not bind their own this
  -> This is an object within the function scope
  -> The function then binds keys and values to the this object
  -> Arrow functions use the this of the function that they are defined in or
  the this of the global object
*/

this.a = 25;
let print = () => {
  console.log(this.a);
};

print();

let arrowPrint = () => {
  console.log(this.a);
};

arrowPrint();

//Cannot set property 'a' of undefined
