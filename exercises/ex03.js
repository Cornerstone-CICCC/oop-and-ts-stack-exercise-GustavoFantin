// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  let tempStack = new Stack;

  while (!stack.isEmpty()) {
    const element = stack.pop()

    let isDuplicate = false;
    const auxStack = new Stack();

    while (!tempStack.isEmpty()) {
      const tempElement = tempStack.pop();
      if (tempElement === element) {
        isDuplicate = true;
      }
      auxStack.push(tempElement);
    }

    while (!auxStack.isEmpty()) {
      tempStack.push(auxStack.pop());
    }

    if (!isDuplicate) {
      tempStack.push(element);
    }
  }


  //return to origin
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [5, 2, 1, 3]