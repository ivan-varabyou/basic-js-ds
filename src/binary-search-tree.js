const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    if(this.base) {
      return this.base
    } else {
      return null
    }
  }

  add(data) {
    this.base = addNode(this.base, data);
    function addNode(node, data) {
      if(!node) {
        return new Node(data);
      }
      if(node.data == data) {
        return node;
      }
      if(node.data > data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return hasNode(this.base, data);
    function hasNode(node, data) {
      if(!node) {
        return false
      }
      if(node.data === data) {
        return true;
      }
      if(node.data > data) {
        return hasNode(node.left, data)
      } else {
        return hasNode(node.right, data)
      }
    }
  }

  find(data) {
    return findNode(this.base, data)
    function findNode(node, data) {
      if(!node) {
        return null
      }
      if(node.data === data) {
        return node
      }
      if(node.data > data) {
        return findNode(node.left,data)
      } else {
        return findNode(node.right, data)
      }
    }
  }

  remove(data) {
    removeNode(this.base, data)
    function removeNode(node, data) {
      let currentNode = node;
      let prevNode = null
      while(currentNode) {
        if(currentNode.data == data) {
          let nextNodeLeft = currentNode.left;
          let nextNodeRight = currentNode.right;

          if(!nextNodeLeft && !nextNodeRight) {
            if(prevNode.data > currentNode.data) {
              prevNode.left = null;
            } else {
              prevNode.right = null;
            }
            break
          }
          if(nextNodeLeft) {
            nextNodeLeft.right = nextNodeRight
            prevNode.left = nextNodeLeft;
            break
          } else {
            prevNode.right = nextNodeLeft;
            break
          }




        }
        prevNode = currentNode;
        if(node.data > data) {
          currentNode = node.left;
        } else {
          currentNode = node.right;
        }
      }
    }
  }

  min() {
    return minNode(this.base)
    function minNode(node){
      if(node.left == null) {
        return node.data
      } else {
        return minNode(node.left)
      }
    }
  }

  max() {
    return maxNode(this.base)
    function maxNode(node) {
      if(node.right == null) {
        return node.data;
      } else {
        return maxNode(node.right)
      }
    }

  }
}




const tree = new BinarySearchTree();

console.log(tree)

console.log(tree.add(25))

module.exports = {
  BinarySearchTree
};
