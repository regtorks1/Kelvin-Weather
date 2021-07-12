// setting the temperature
const kelvin = 293;
//converting kelvin to celsius
const celsius = kelvin - 273;
//converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//rounding down the fahrenheit number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// converting celcius to newton
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The tempaerature is ${Newton} degrees Newton.`);