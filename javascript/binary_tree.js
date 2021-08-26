class Node {
  constructor( value, left = null, right = null) {
    // add your Node class code
    this.value = value,
    this.left = left,
    this.right = right
  }
}

// list = [1, 4, 7]
function oneToSeven() {
  // manually create the BST
  // then return the root node
  const lefty = new Node(1)
  const righty = new Node(7)
  const root = new Node(4, lefty, righty)
  return root 
}

// list = [10, 40, 45, 46, 50]
function tenToFifty() {
  const righty = new Node(50)
  const leftyRighty = new Node(45)
  const leftyLefty = new Node(10)
  const lefty = new Node(40, leftyLefty, leftyRighty)
  const root = new Node(46, lefty, righty)
  return root 
}

// list = [-20, -19, -17, -15, 0, 1, 2, 10]
function negativeToPositive() {
  const rightyRighty = new Node(10)
  const rightyLefty = new Node(1)
  const righty = new Node(2, rightyLefty, rightyRighty)
  const leftyLeftyLefty = new Node(-20)
  const leftyLefty = new Node(-19, leftyLeftyLefty)
  const leftyRighty = new Node(-15)
  const lefty = new Node(-17, leftyLefty, leftyRighty)
  const root = new Node(0, lefty, righty)
  return root 
}

if (require.main === module) {
  // add your own tests in here if you want
}

module.exports = {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive
};

// Please add your pseudocode to this file
// And a written explanation of your solution
