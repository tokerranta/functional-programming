// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Check the console! Trying out compose</h1>`;

type Unary<T> = (param: T) => T

function compose<T>(...fns: Array<Unary<T>>): Unary<T> {
  return function composed(value: T): T {
    return [...fns].reverse().reduce((acc, fn) => {
      return fn(acc);
    }, value)
  }
}


const add = (x: number) => (y: number) => x + y;
const multiply = (x: number) => (y: number) => x * y; 
const double = multiply(2);
const incrementOne = add(1);
const doublePlusOne = compose(incrementOne, double);

console.log(doublePlusOne(10));