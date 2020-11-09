// import using require

// declare class

// export class using module.exports

import Shape from "./shape";

class Circle extends Shape {
  constructor() {
    super("blue");
  }
  calculateArea() {
    console.log("Circle area");
  }
}

let c = new Circle();
c.calculateArea();
c.drawShape();
