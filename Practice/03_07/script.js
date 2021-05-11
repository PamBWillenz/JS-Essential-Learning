/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
/**
 * Create a Bike object.
 */

const bike = {
  name: "My Roubaix",
  size: 49,
  color: "red",
  component: "Di2",
  tireSize: {
    psi: 110,
    diameter: 720,
  },
  electronic: true,
  gravelAble: function (tireStatus) {
    this.tireBig = tireStatus;
  },
  newTireSize: function (tirePsi, tireDiameter) {
    this.tireSize.psi = tirePsi;
    this.tireSize.diameter = tireDiameter;
  },
};

console.log("The bike object:", bike);
console.log("the component value:", bike.component);
console.log("Tire Size Psi:", bike.tireSize.psi);

var cycle = "component";
console.log("The component value:", bike[cycle]);
