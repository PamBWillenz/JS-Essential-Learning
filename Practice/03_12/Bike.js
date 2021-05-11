/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Bike {
  constructor(
    // Defines parameters:
    type,
    component,
    color,
    tireSizePsi,
    tireSizeDimension,
    year,
    gravelAble
  ) {
    // Define properties:
    this.type = type;
    this.component = component;
    this.color = color;
    this.year = year;
    this.tireSize = {
      psi: tireSizePsi,
      dimenension: tireSizeDimension,
    };
    this.gravelAble = gravelAble;
  }
  // Add methods like normal functions:
  changeTire(tireStatus) {
    this.gravelAble = tireStatus;
  }
  newTireSize(psi, dimension) {
    this.tireSize.psi = psi;
    this.tireSize.dimenension = dimension;
  }
}

export default Bike;
