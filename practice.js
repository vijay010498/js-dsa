// SLL
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    if (!this.head.next) {
      this.head = null;
      this.length--;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    this.length--;
    return this;
  }

  // removes first
  shift() {
    if (!this.head) return undefined;
    if (!this.head.next) {
      delete this.next;
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return this;
  }

  // adds first
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(pos) {
    let i = 0;
    if (pos < 0 || pos >= this.length) return null;
    if (!this.head) return undefined;
    let currentNode = this.head;
    while (i !== pos) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let counter = 0;
      let currentNode = this.haad;
      let prev = currentNode;
      const newNode = new Node(val);
      while (counter !== index) {
        prev = currentNode;
        currentNode = currentNode.next;
        counter++;
      }
      prev.next = newNode;
      newNode.next = currentNode;
      this.length++;
      return this;
    }
  }

  traverse() {
    let node = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }

  reverse() {
    if (!this.head) return undefined;
    if (!this.head.next) return null;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prev = null;
    let next;
    for (let i = 0; i < length; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
  }

}


// DLL
class DLLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  push(val) {
    const newNode = new DLLNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head || !this.tail) return undefined;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      const prev = this.tail.prev;
      this.tail.prev = null;
      prev.next = null;
      this.tail = prev;
    }
    this.length--;
  }

  shift() {
    // removes first
    if (!this.head) return undefined;
    if (!this.head.next) {
      this.head = null;
      this.tail = null
    } else {
      const nodeToRemove = this.head;
      this.head = nodeToRemove.next;
      this.head.prev = null;
    }

    this.length--;
  }

  unshift(val) {
    // adding first
    const node = new DLLNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head
      this.head = node;
    }
    this.length++;
  }

  get(pos) {
    if (pos === 0 || pos >= this.length) return null;
    if (pos <= this.length / 2) {
      // from left side
      let count = 0;
      let current = this.head;
      while (count !== pos) {
        current = current.next;
        count++
      }
      return current;
    } else {
      // from right side
      let count = this.length - 1;
      let current = this.tail;
      while (count !== pos) {
        current = current.prev;
        count--
      }
      return current;
    }
  }

  set(pos, val) {
    let node = this.get(pos);
    if (node) {
      node.val = val;
      return;
    }
  }

  insert(pos, val) {
    if (pos < 0 || pos > this.length) return false;
    if (pos === 0) {
      this.unshift(val);
    } else if (pos === this.length) {
      this.push(val);
    } else {
      const newNode = new DLLNode(val);
      let counter = 0;
      let currentNode = this.head;
      while (counter !== pos) {
        currentNode = currentNode.next;
        counter++
      }
      currentNode.prev.next = newNode;
      newNode.next = currentNode;
      newNode.prev = currentNode.prev;
      currentNode.prev = newNode;
      this.length++;
    }
  }

  remove(pos) {
    if (pos < 0 || pos >= this.length) return undefined;
    if (pos === this.length) this.pop();
    else if (pos === 0) this.shift();
    else {
      let foundNode = this.get(pos);
      if (foundNode) {
        foundNode.prev.next = foundNode.next;
        foundNode.next.prev = foundNode.prev;
        foundNode.next = null;
        foundNode.prev = null;
        this.length--;
      }
    }
  }
}

// stack using LL
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
  }

  pop() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
  }
}