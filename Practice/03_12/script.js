/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Bike from "./Bike.js";

const everydayBike = new Bike("Carbon", "Dsi", "red", 110, 720, 2014, false);

console.log("The everydayBike object:", everydayBike);
console.log("Can you ride gravel:", everydayBike.gravelAble);
console.log("Bike color:", everydayBike.color);
