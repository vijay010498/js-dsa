/*
const fact = (num) => {
  if (num === 1) return 1;
  return num * fact(num - 1);
};

const pow = (num, expo) => {
  if (expo === 0) return 1;
  return num * powRec(num, expo - 1);
};

//binary search
const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === num) return middle;
    else if (arr[middle > num]) {
      right = middle - 1;
    } else if (arr[middle] < num) {
      left = middle + 1;
    }
  }
  return -1;
};
const stringSearch = (str, patt) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i + j] !== patt[j]) {
        break;
      }
      if (j === patt.length - 1) {
        return "MATCH FOUND";
      }
    }
  }
  return "NO MATCH FOUND";
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.splice(0, mid));
  let right = mergeSort(arr.splice(mid));
  return merge(left, right);
};
const merge = (arr1, arr2) => {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
};

class Car {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return this.carName;
  }
}
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + this.model;
  }
}
const myCar = new Model("ford", "mustang");
console.log(myCar);

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
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

//stack using array
class stack {
  constructor() {
    this.data = [];
  }
  insert(val) {
    this.data.push(val);
  }
  delete() {
    return this.data.pop();
  }
}
//queue using array
class queue {
  constructor() {
    this.values = [];
  }
  enqueue(val) {
    this.values.unshift(val);
  }
  dequeue() {
    return this.values.pop();
  }
}

class BSTNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new BSTNode(val);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.value) {
          if (current.left === null) {
            current.left = node;
          } else current = current.left;
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = node;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    while (true) {
      if (value === current.value) return "FOUND";
      else if (value < current.value) {
        if (current.left === null) return "NOT FOUND";
        else current = current.left;
      } else if (value > current.value) {
        if (current.right === null) return "NOT FOUND";
        else current = current.right;
      }
    }
  }
  BFS() {
    if (!this.root) return undefined;
    let visited = [];
    let queue = [];
    queue.unshift(this.root);
    while (queue.length) {
      let node = queue.pop();
      visited.push(node.value);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    return visited;
  }
  BFSPre() {
    let visited = [];
    function travsere(node) {
      visited.push(node.value);
      if (node.left) travsere(node.left);
      if (node.right) travsere(node.right);
    }
    travsere(this.root);
    return visited;
  }
  DFSPost() {
    let visited = [];
    function travserse(node) {
      if (node.left) travserse(node.left);
      if (node.right) travserse(node.right);
      visited.push(node.value);
    }
    travserse(this.root);
    return visited;
  }
  DFSIn() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}
*/
function anagram(str1, str2) {
  if (str1.split().length !== str2.split().length) return false;
  let countStr1 = {};
  let countStr2 = {};
  for (let val of str1.split("")) {
    countStr1[val] ? countStr1[val]++ : (countStr1[val] = 1);
  }
  for (let val of str2.split("")) {
    countStr2[val] ? countStr2[val]++ : (countStr2[val] = 1);
  }
  for (let char in countStr1) {
    if (countStr2[char]) {
      if (countStr2[char] !== countStr1[char]) return false;
    } else return false;
  }
  return true;
}
//binary search
const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === num) return middle;
    else if (arr[middle] > num) {
      right = middle - 1;
    } else if (arr[middle] < num) {
      left = middle + 1;
    }
  }
  return -2;
};
//that questing which made me get survey sparrow
const thatQuestion = (arr, k) => {
  //array is always sorted
  let left = 0;
  let right = arr.length - 1;
  let results = [];
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === k) {
      results.push([arr[left], arr[right]]);
      left++;
      right--;
    }
    if (sum < k) {
      left++;
    } else if (sum > k) {
      right--;
    }
  }
  if (results.length) return results;
  else return -1;
};

//bubbleSort
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

//selectio sort
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (arr1, arr2) => {
  const results = [...arr1, ...arr2];
  return results.sort((a, b) => {
    return a - b;
  });
};

const stringSearch = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j < str1.length; j++) {
      if (str1[i + j] !== str2[j]) break;
      if (j === str2.length - 1) return "MATCH FOUND";
    }
  }
  return "NO MATCH FOsUND";
};

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
    this.length++;
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
    const val = current.next.val;
    current.next = null;
    this.tail = current;
    this.length--;
    return val;
  }
}

//stack using array
class stack {
  constructor() {
    this.data = [];
  }
  insert(val) {
    this.data.push(val);
  }
  pop() {
    this.data.pop();
  }
}

//queue using array
class queue {
  constructor() {
    this.values = [];
  }
  enqueue(val) {
    this.values.unshift(val);
  }
  dequeue() {
    this.values.pop();
  }
}

//BST
class BSTNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new BSTNode(value);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        } else {
          return this;
        }
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    else {
      let current = this.root;
      while (true) {
        if (value === current.value) {
          console.log("FOUND");
          return true;
        } else if (value < current.value) {
          if (current.left === null) {
            console.log("NOT FOUND");
            return false;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          //right
          if (current.right === null) {
            console.log("NOT FOUND");
            return false;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  BFS() {
    let data = [];
    let queue = [];
    if (!this.root) return undefined;
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.left);
    }
    return data;
  }
  DFSPre() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}
// //simple priority queue
// class PQ {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     this.values.push({ val, priority });
//     this.sort();
//   }
//   dequeue() {
//     return this.values.shift();
//   }
//   sort() {
//     this.values.sort((a, b) => {
//       return a.priority - b.priority;
//     });
//   }
// }
class priorityNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class prioriyQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new priorityNode(val, priority);
    this.values.push(newNode);
    //bubble up
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority <= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    //removing the maximum element or extracting the maximum element(high priority)
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority > element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority > element.priority) ||
            (swap !== null) & (rightChild.priority > leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }

      return max;
    }
  }
}
const priority = new prioriyQueue();
priority.enqueue("VIJAY1", 120);
priority.enqueue("VIJAY2", 112);
priority.enqueue("VIJAY3", 0);
priority.enqueue("VIJAY4", 1);
priority.enqueue("VIJAY5", 112320);
priority.enqueue("VIJAY6", 112321312);
console.log(priority.dequeue());
