/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

let roomContents = ["phone", "kitties", "coffee", "wahoo trainer", "briefcase"];
console.log(roomContents);

// move the last item to the first position
roomContents = roomContents.filter((item) => item !== "briefcase");
roomContents.unshift("briefcase");
console.log(roomContents);

// sort alphabetically
roomContents.sort();
console.log(roomContents);

// find a specific item
roomContents.filter(function (item, index) {
  console.log(item);

  console.log(index);
});

// remove an item with a specific value from array
let value = "kitty";
let roomContentsTwo = [
  "phone",
  "kitties",
  "coffee",
  "wahoo trainer",
  "briefcase",
];
roomContentsTwo = roomContentsTwo.filter((item) => item !== value);
console.log(roomContentsTwo);

// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

// let longItems = backpackContents.find(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log("longItems:", longItems);
