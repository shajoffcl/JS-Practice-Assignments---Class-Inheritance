// declare class

// export class using module.exports

class Shape {
  constructor(color) {
    this.color = color;
  }
  drawShape() {
    console.log("Draw shape method");
  }
  calculateArea() {
    console.log("Shape area");
  }
}

module.exports = Shape;
