// declare class

// export class using module.exports

class Shape {
  constructor() {
    this.color = "Blue";
  }
  drawShape() {
    console.log("Draw shape method");
  }
  calculateArea() {
    console.log("Shape area");
  }
}

module.exports = Shape;
