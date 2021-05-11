/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newVolume: function (volume) {
    this.volume = volume;
  },
  newColor: function (color) {
    this.color = color;
  },
  newpocketNum: function (pocketNum) {
    this.pocketNum = pocketNum;
  },
};

console.log("Volume before:", backpack.volume);
backpack.newVolume(50);
console.log("Volume after:", backpack.volume);

console.log("Color before:", backpack.color);
backpack.newColor("blue");
console.log("Color after:", backpack.color);

console.log("Pocket Number before:", backpack.pocketNum);
backpack.newpocketNum(20);
console.log("Pocket Number after:", backpack.pocketNum);
