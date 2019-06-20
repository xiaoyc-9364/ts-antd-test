import React from 'react';

interface SquareConfig {
  color?: string;
  width?: number;
}
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src, sub) {
  const result = src.search(sub);
  return result > -1;
};
function createSquare(config: SquareConfig): { color: string; area: number } {
  const newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

const myStr: string = myArray[1];

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {
    h = h;
  }

  tick() {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}

  tick() {
    console.log('tick tock');
  }
}

const digital = createClock(DigitalClock, 12, 17);
const analog = createClock(AnalogClock, 7, 32);
analog.tick();
export default (): React.ReactNode => (
  <div>
    {createSquare({ width: 100 }).area}
    {myStr}
    {JSON.stringify(digital)}
    {JSON.stringify(analog)}
  </div>
);
