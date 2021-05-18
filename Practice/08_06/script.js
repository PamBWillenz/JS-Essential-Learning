/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 *
 */

const bluePack = {
  name: "Blue Pack",
  color: "blue",
  volume: 10,
  pocketNum: 5,
};

const changePack = (presentPack) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
      <h1>${presentPack.name}</h1>
      <ul>
        <li>Volume: ${presentPack.volume}</li>
        <li>Color: ${presentPack.color}</li>
        <li>Number of pockets: ${presentPack.pocketNum}</li>
      </ul>
    `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(changePack(bluePack));
