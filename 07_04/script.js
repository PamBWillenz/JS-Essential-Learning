/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

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
