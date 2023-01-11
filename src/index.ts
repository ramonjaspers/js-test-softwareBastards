import validateBar from "./validators/bar";
import validateCar from "./validators/car";
import validatePerson from "./validators/person";

const bars = require ("../examples/bars");
const cars = require ("../examples/cars");
const person = require ("../examples/persons");

// for this example i am using console logs as result.
// in a normal scenario for api validation i'd use joi validators
// and validate with validateAsync which would throw the invalid prop
console.log("-------valid messages--------");
let barMessage = `Bar is ${validateBar(bars.barObj) ? "valid" : "invalid"} `;
let carMessage = `Car is ${validateCar(cars.carObj) ? "valid" : "invalid"} `;
let personMessage = `Person is ${validatePerson(person.personObj) ? "valid" : "invalid"} `;
console.log(barMessage);
console.log(carMessage);
console.log(personMessage);

// due to typeScript usage invalid object passing is not possible,
// example given for bar validation when not using a strict object
console.log("-------invalid messages--------");
barMessage = `Bar is ${validateBar(bars.barObjF) ? "valid" : "invalid"} `;
// carMessage = `Car is ${validateCar(invalidCar) ? "valid" : "invalid"} `;
// personMessage = `Person is ${validatePerson(invalidPerson) ? "valid" : "invalid"}`;
console.log(barMessage);
// console.log(carMessage);
// console.log(personMessage);
