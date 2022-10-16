const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

 class Stack {
  constructor() {
    this.array = []
  }
  push(element) {
      const nArray = []
      if(this.array.length > 0) {
        this.array.forEach((value, index) => {
          nArray[index] = value
        })
      }
      nArray[nArray.length] = element
      this.array = nArray
  }
  pop() {
      let lastItem
      if(this.array.length > 0) {
          const nArray = []
          this.array.forEach((value, index) => {
              if (this.array.length -1 == index) {
                  lastItem = value
              } else {
                  nArray[index] = value;
              }
          })
          this.array = nArray
      }
      return lastItem
  }
  peek() {
      return this.array[this.array.length-1]
  }
}


const stack = new Stack();
console.log(stack)
stack.push(1); // adds the element to the stack
stack.push(2); // adds the element to the stack
stack.push(3); // adds the element to the stack
console.log(stack)
stack.peek(); // returns the peek, but doesn't delete it, returns 1
stack.pop(); // returns the top element from stack and deletes it, returns 1
stack.pop(); // undefined

module.exports = {
  Stack
};
