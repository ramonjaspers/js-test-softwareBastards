import validateCar from "./validators/car";


const validCar = {
  brand: "Mazda",
  type: "MX5 NB 1.8",
  milage: 199999.99,
  extras: ["2001 Special Edition"],
}


console.log("-------valid messages--------");
let carMessage = `Car is ${validateCar(validCar) ? "valid" : "invalid"} `;
console.log(carMessage);

