function same(arr1, arr2) {
  //O(N) : N = arr1 size
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let value1 of arr1.sort()) {
    let match = false;
    arr2 = arr2.sort();
    for (let i = 0; i < arr2.length; i++) {
      if (Math.pow(value1, 2) === arr2[i]) {
        match = true;
        arr2.splice(i, 1); //performance optimization
      }
    }
    if (match) {
      match = false;
    } else return false;
  }
  return true;
}

function anagram(str1, str2) {
  if (str1.split().length !== str2.split().length) {
    return false;
  }
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

const sumZero = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return console.log(arr[i], arr[j]);
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
  return console.log("No Pairs Found");
};

const countUniqueValues = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return console.log(i + 1);
};

//sliding window
const maxSubArraySum = (arr, num) => {
  if (num > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

//pblms
//same number frequency
const numFreq = (num1, num2) => {
  const num1Str = num1.toString();
  const num2Str = num2.toString();
  let num1Freq = {};
  let num2Freq = {};
};

const test = () => {
  let set = new Set();
  set.add(5);
  set.add("5");
  set.add(5);
  console.log(set);
  console.log(set.size);
};

const fact = (num) => {
  if (num === 1) return 1;
  return num * fact(num - 1);
};
const factIt = (num) => {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

const powRec = (num, expo) => {
  if (expo === 0) return 1;
  return num * powRec(num, expo - 1);
};

const arrProdRec = (arr) => {
  if (arr.length === 0) return 1;
  return arr[0] * arrProdRec(arr.slice(1));
};

const recAdd = (num) => {
  if (num === 0) return 0;
  return num + recAdd(num - 1);
};

const fibRec = (num) => {
  if (num <= 2) return 1;
  return fibRec(num - 1) + fibRec(num - 2);
};

const capFirst = (arr) => {
  let finalArr = [];

  const recFunc = (arr) => {
    if (arr.length <= 0) {
      return;
    }
    let str = arr[0];
    let tmpArr = str.split("");
    tmpArr[0] = tmpArr[0].toUpperCase();
    finalArr.push(tmpArr.join(""));
    recFunc(arr.splice(1));
  };
  recFunc(arr);
  return finalArr;
};

const capALl = (arr) => {
  let finalArr = [];

  const recFunc = (arr) => {
    if (arr.length <= 0) return;
    let str = arr[0];
    finalArr.push(str.toUpperCase());
    recFunc(arr.splice(1));
  };

  recFunc(arr);
  return finalArr;
};

//////////////////////////////////////////////////// SEARCHING ////////////////////////////////////////////
//linear search
const linearSerch = (arr, num) => {
  let i = 0;
  while (i <= arr.length) {
    if (arr[i] === num) return i + 1;
    i++;
  }
  return -1;
};

//BInary search
const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === num) return middle + 1;
    else if (arr[middle] > num) {
      right = middle - 1;
    } else if (arr[middle] < num) {
      left = middle + 1;
    }
  }
  return -1;
};

//string search
const stringSearch = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        break;
      }
      if (j === str2.length - 1) {
        return "MATCH FOUND";
      }
    }
  }
  return "NO MATCH FOUND";
};

/////////////////////////////////////////////////////////////////////////////
///////////////sorting//////////////////////
//bubble sort
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(i, j);
      }
    }
  }
  return arr;
  function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};

//selection sort
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    swap(i, min);
  }
  return arr;
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

//insertion sort .. best for live data
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};
//console.log(insertionSort([4, 78, 7, 87, 2, 33, 65, 77, 1]));

//BEST SORT'S/////////////////
////////////////////////////////////////////////////////////////////
/////////////////////merge sort///////////////////////////////////

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

//merge two arrays(sorted)
const merge = (arr1, arr2) => {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      //i is smaller
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  // some ele in arr1
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  //some ele in arr2
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
};

//console.log(mergeSort([1, 2, 3, 4, 5]));
//console.log(selectionSort([1, 5, 7, 2, 9, 1, 4, 9, 2, 1, 1250, 166, 189, 199]));
//console.log(merge([1, 2, 3, 4, 5], [6, 7, 8, 10, 11]));

//quick sort

//pivot helper
const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
};
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    //left side
    quickSort(arr, left, pivotIdx - 1);
    //right side
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

///////////////////////////////////////// DA
/////////////class
class Student {
  constructor(fName, lName, year) {
    this.firstName = fName;
    this.lastName = lName;
    this.year = year;
    this.tardies = 0;
  }
  name() {
    return `Name is ${(this.firstName, this.lastName)}`;
  }
  markLate() {
    this.tardies += 1;
    return `Late : ${this.tardies}`;
  }
}

/////////////////////////////////////////////////////////////////
///////////////// SLL
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
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
  shift() {
    //remove first
    if (!this.head) return undefined;
    if (!this.head.next) {
      delete this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    this.head = this.head.next;
    this.length--;
  }
  unshift(val) {
    //add first
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
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
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let counter = 0;
      let curNode = this.head;
      let prev = curNode;
      const node = new Node(val);
      while (counter !== index) {
        prev = curNode;
        curNode = curNode.next;
        counter++;
      }
      prev.next = node;
      node.next = curNode;
      this.length++;
    }
  }
  remove(index) {
    if (index === 0) this.shift();
    else if (index === this.length - 1) this.pop();
    else {
      let counter = 0;
      let node = this.head;
      let prev = node;
      while (index !== counter) {
        prev = node;
        node = node.next;
        counter++;
      }
      prev.next = node.next;
      node.next = null;
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
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}
/*const ll = new SinglyLinkedList();

ll.push(10);
ll.push(20);
ll.push(30);
ll.push(40);
ll.push(50);
ll.reverse();
ll.traverse();*/
//////////////////////////////////////////////////////////////////////////////////
//////////////////////// DLL
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
    this.length = 0;
  }
  push(val) {
    const node = new DLLNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head || !this.tail) return undefined;
    if (this.length === 1) {
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
    //remove first
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
    }
    this.length--;
  }
  unshift(val) {
    //adding first
    const node = new DLLNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }
  get(pos) {
    if (pos === 0 || pos >= this.length) return null;
    if (pos <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== pos) {
        current = current.next;
        count++;
      }
      console.log("From left");
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== pos) {
        current = current.prev;
        count--;
      }
      console.log("From RIght");
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
      let node = new DLLNode(val);
      let counter = 0;
      let currNode = this.head;
      while (counter !== pos) {
        currNode = currNode.next;
        counter++;
      }
      currNode.prev.next = node;
      node.next = currNode;
      node.prev = currNode.prev;
      currNode.prev = node;
      this.length++;
    }
  }
  remove(pos) {
    if (pos < 0 || pos >= this.length) return;
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
  traverse() {
    let node = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }
}

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// STACK /////

//stack using array
class stack {
  constructor() {
    this.data = [];
  }
  insert(val) {
    this.data.push(val);
  }
  delete() {
    this.data.pop();
  }
  traverse() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
    }
  }
}

//////////////////////////////////////////////////////////////////
////////// stack using SLL like shift and unshift
class stackNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class stackSLL {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    //unshift
    let node = new stackNode(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
  }
  pop() {
    // shift
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
  }
  traverse() {
    let node = this.first;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////
/////////////queue using array

class queueArr {
  constructor() {
    this.values = [];
  }
  enqueue(val) {
    this.values.unshift(val);
  }
  dequeue() {
    this.values.pop();
  }
  traverse() {
    for (let i = 0; i < this.values.length; i++) {
      console.log(this.values[i]);
    }
    console.log("\n");
  }
}

///////////////////////////////////////
//queue using linked list
class queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }
  dequeue() {
    if (!this.first) return null;
    else {
      let temp = this.first;
      this.first = this.first.next;
      temp.next = null;
    }
    this.size--;
  }
  travserse() {
    let curr = this.first;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////// TREES //////////////////////////////////////////////
class BSTNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
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
          //console.log(`Duplicate Value ${value}`);
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
          //left
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
    let node = null;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
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
  DFSPost() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInorder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

/*let BST = new BinarySearchTree();
BST.insert(10);
BST.insert(6);
BST.insert(3);
BST.insert(8);
BST.insert(15);
BST.insert(20);
console.log("BFS:", BST.BFS());
console.log("DFS_PRE:", BST.DFSPre());
console.log("DFS_POST", BST.DFSPost());
console.log("DFS_INORDER", BST.DFSInorder());*/

////////////////////////////////////////////////////////////////////////////////
///////////////////////// BINARY HEAP ///////////////////////////////////////////
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent < element) {
        this.swap(parentIdx, idx);
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  extractMax() {
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
          if (leftChild > element) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null) & (rightChild > leftChild)
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

  swap(i, j) {
    let temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }
}
////////////////////////////////////////////////
//////////// PRIORITY QUEUES////////////////////
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
/*let ER = new prioriyQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gunshot", 5);
ER.enqueue("High Fever", 2);
ER.enqueue("COVID", 10);
console.log(ER);
console.log(ER.dequeue());
console.log(ER);*/

//assign
/*const assign = (num) => {
  const numArrStr = num.toString().split("");
  let numArr = [];
  let output = {};
  for (let num of numArrStr) {
    numArr.push(parseInt(num));
  }
  for (let i = 0; i < numArr.length; i++) {
    let tempSum = 0;
    //forward move
    let maxMovesFw = numArr.length - 1 - i;
    let totalMovesFw = numArr[i];
    let count = 0;
    for (let j = i + 1; j <= totalMovesFw && count < maxMovesFw; j++) {
      count++;
      tempSum = tempSum + numArr[j];
    }
    //backward
    let count1 = 0;
    for (let j = i - 1; count1 < numArr[i] && j >= 0; j--) {
      tempSum += numArr[j];
      count1++;
    }
    output[i] = tempSum;
  }
  console.log(output);
};
//assign(34326);*/

///////////////////////////////////////////////////////////////////////////////////
///////////////////////// HASH TABLES /////////////////////////////////////////////
//console.log("vijay".charCodeAt(3) - 96);
class HashTable {
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    //first hash
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    //get index
    const index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    else {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0]))
            keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
}
///////////////////////////////////////////////////////////////////
//GRAPH
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1])
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    if (this.adjacencyList[v2])
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(v) {
    while (this.adjacencyList[v].length) {
      const vertex = this.adjacencyList[v].pop();
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[v];
  }
  DFSR(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    }
    dfs(start);
    return result;
  }
  DFSI(start) {
    let stack = [start];
    let visited = {};
    let result = [];
    visited[start] = true;
    while (stack.length) {
      let vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }
  BFS(start) {
    let queue = [start];
    let result = [];
    let visited = {};

    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);
      visited[currentVertex] = true;
      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

/*const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph);
console.log(graph.DFSR("A"));
console.log(graph.DFSI("A"));
console.log(graph.BFS("A"));*/

/*const solve = (strArray) => {
  let hashTable = new Set();
  strArray.forEach((i) => {
    return hashTable.add(i.toLowerCase().split("").sort().join(""));
  });
  return hashTable.size === 1;
};

console.log(solve(["act", "cat", "tac"]));*/

/*const solve = (strOne, strTwo) => {
  let op = [];
  for (let i = 0; i < strTwo.length; i++) {
    for (let j = 0; j < strOne.length; j++) {
      if (strOne[j] === strTwo[i]) {
        op.push(strOne[j]);
      }
    }
  }
  if (op.length !== strOne.length) {
    for (let val of strOne) {
      if (!strTwo.includes(val)) {
        op.push(val);
      }
    }
  }
  return op.join("");
};

console.log(solve("abcf", "bda"));*/

/*const solve = (strArray, strArg) => {
  let str = "";
  for (let x of strArray) {
    if (strArg.includes(x)) {
      str += x;
    }
  }
  if (str.length === strArg.length) return true;
  return false;
};
console.log(solve(["pp", "le", "ap", "j", "eow"], "apple"));*/
/*const solve = (strArray) => {
  for (let i = 0; i < strArray.length; i++) {
    for (let j = i + 1; j < strArray.length; j++) {
      if (checkAnagram(strArray[i], strArray[j])) return true;
    }
  }
  return false;
};

const checkAnagram = (str1, str2) => {
  str1 = str1.replace(/\s/g, "");
  str2 = str2.replace(/\s/g, "");
  if (str1.length !== str2.length) return false;
  let str1Count = {};
  let str2Count = {};
  for (let char of str1) {
    str1Count[char] ? str1Count[char]++ : (str1Count[char] = 1);
  }
  for (let char of str2) {
    str2Count[char] ? str2Count[char]++ : (str2Count[char] = 1);
  }
  for (let key in str1Count) {
    if (str2Count[key]) {
      if (str1Count[key] !== str2Count[key]) return false;
    } else return false;
  }
  return true;
};
//console.log(checkAnagram("vijay", "vijay"));
console.log(solve(["school master", "tons of cats", "the classroom"]));*/
/*const solve = (intArray, k) => {
  intArray = intArray.sort((a, b) => {
    return a - b;
  });
  let left = 0;
  let right = intArray.length - 1;
  while (left < right) {
    let currSum = intArray[left] + intArray[right];
    if (currSum === k) return true;
    else if (currSum > k) {
      right--;
    } else if (currSum < k) {
      left++;
    }
  }
  return false;
};
console.log(solve([1, 2, 3, 4, 5, 6], 7));*/

/*const solve = (strOne, strTwo) => {
  //swap counts
  let swapCounts = {};
  for (let char of strOne) {
    swapCounts[char] = 0;
  }

  let maxSwaps = 2;
  for (let i = 0; i < strOne.length && maxSwaps > 0; i++) {
    for (let j = 0; j < strTwo.length; j++) {
      if (strOne[i] === strTwo[i]) break;
      else {
        //check for swap
        for (let k = i + 1; k < strOne.length; k++) {
          if (strOne[k] === strTwo[j]) {
            if (swapCounts[strOne[k]] <= 2) {
              //swap can be done
              swapCounts[strOne[k]]++;
              let tempStrOneArr = strOne.split("");
              [tempStrOneArr[k], tempStrOneArr[i]] = [
                tempStrOneArr[i],
                tempStrOneArr[k],
              ];
              strOne = tempStrOneArr.join("");
              maxSwaps--;
              if (strOne === strTwo) return true;
            } else {
              return false;
            }
          }
        }
      }
    }
  }
  return false;
};
console.log(solve("nermitla", "terminal"));*/
/*const solve = (intArray) => {
  let j = 0;
  let i = 0;
  let op = [];
  intArray[0][0] = 0;
  while (true) {
    op.push(intArray[i][j]);

    intArray[i][j] = 0;
    let maxs = [-1, -1, -1, -1];
    let pos = [[-1, -1], [-1, -1], [-1, -1], [-1 - 1]];
    if (i - 1 >= 0) {
      maxs[0] = intArray[i - 1][j];
      pos[0] = [i - 1, j];
    }
    if (j - 1 >= 0) {
      maxs[1] = intArray[i][j - 1];
      pos[1] = [i, j - 1];
    }
    if (j + 1 < intArray.length) {
      maxs[2] = intArray[i][j + 1];
      pos[2] = [i, j + 1];
    }
    if (i + 1 < intArray.length) {
      maxs[3] = intArray[i + 1][j];
      pos[3] = [i + 1, j];
    }
    if (Math.max(...maxs) === 0) {
      op.shift();
      console.log(op);
      let sum = 0;
      for (let i = 0; i < op.length; i++) {
        sum += op[i];
      }
      return sum;
    }
    let nextJMove = maxs.indexOf(Math.max(...maxs));
    i = pos[nextJMove][0];
    j = pos[nextJMove][1];
  }
};
console.log(
  solve([
    [5, 7, 4, 3],
    [1, 3, 8, 9],
    [8, 3, 6, 1],
    [7, 3, 5, 2],
  ])
);*/

/*//165
const solve = (strArray) => {
  strArray.sort((a, b) => a.length - b.length);
  const longStr = strArray.shift();
  let currMax = 0;
  let maxOp = [];
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < strArray.length; j++) {
      let tempCurrMax = 0;
      let tempMaxOp = [];
      for (let k = 0; k < strArray[j].length; k++) {
        if (longStr[i + k] !== strArray[j][k]) {
          if (tempCurrMax > currMax) {
            currMax = tempCurrMax;
            maxOp.length = 0;
            maxOp.push(...tempMaxOp);
          }
          break;
        } else {
          tempCurrMax++;
          tempMaxOp.push(strArray[j][k]);
        }
      }
      if (tempCurrMax > currMax) {
        currMax = tempCurrMax;
        maxOp.length = 0;
        maxOp.push(...tempMaxOp);
      }
    }
  }
  return maxOp.join("");
};

console.log(solve(["test", "testing", "tsar"]));*/

//307
/*const solve = (strArray) => {
  let str = "";
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i][0] === "add") {
      str += strArray[i][1];
    } else if (strArray[i][0] === "delete") {
      //pattern match
      const pattern = strArray[i][1];
      for (let j = 0; j < str.length; j++) {
        for (let k = 0; k < pattern.length; k++) {
          if (str[j + k] !== pattern[k]) {
            //no match found
            break;
          }
          if (k === pattern.length - 1) {
            //pattern match
            let tempArr = str.split("");
            tempArrr = tempArr.splice(j, pattern.length);
            str = tempArr.join("");
            break;
          }
        }
      }
    }
  }
  return str;
};

console.log(
  solve([
    ["add", "oralllng"],
    ["delete", "lll"],
    ["add", "e"],
  ])
);*/
/*

const solve = (password) => {
  if (password.length < 8) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[A-Z]/.test(password)) return false;
};

console.log(solve("Testdfdf12!"));
*/

//string sort
/*const solve = (arrOne, arrTwo) => {
  let temp = [...arrOne, ...arrTwo];
  return temp.sort((a, b) => a.localeCompare(b));
};

console.log(solve(["x", "y", "z"], ["r", "s", "w"]));*/
/*const solve = (strArray) => {
  let symbols = {};
  strArray.forEach((str, i) => {
    let strArr = str.split("");
    let symbol = strArr.shift();
    let shiftedStr = strArr.join("");
    strArray[i] = shiftedStr;
    symbols[shiftedStr] = symbol;
  });
  //now sort
  strArray.sort((a, b) => a.localeCompare(b));
  //merge symbols
  strArray.forEach((str, i) => {
    let symbol = symbols[str];
    let tempStrArr = str.split("");
    tempStrArr.unshift(symbol);
    let mergedStr = tempStrArr.join("");
    strArray[i] = mergedStr;
  });

  return strArray;
};

console.log(solve(["!James", "#Albert", "#Winston", "&Sally"]));*/
/*const solve = (a, b, k) => {
  const median = Math.floor((a + b) / 2);
  const op = [median];
  const maxMoveEitherSide = (k - 1) / 2;
  //move right side
  for (let i = 0; i < maxMoveEitherSide; i++) {
    op.push(op[op.length - 1] + 1);
    op.unshift(op[0] - 1);
  }
  //left move
  return op;
};

console.log(solve(1, 9, 3));*/
/*const solve = (charArray, strArray) => {
  for (let str of strArray) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (count === charArray.length - 1) return str;
      if (charArray.includes(str[i])) count++;
    }
  }
};
console.log(
  solve(
    ["s", "p", "p", "l", "a", "e"],
    ["applesauce", "apples", "orange", "banana"]
  )
);*/

//238
/*const solve = (strArray) => {
  let counts = {};
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < strArray[i].length; j++) {
      counts[strArray[i][j]]
        ? counts[strArray[i][j]]++
        : (counts[strArray[i][j]] = 1);
    }
  }

  for (let arr of strArray) {
    for (let i = 0; i < arr.length; i++) {
      if (counts[arr[i]] > 1) {
        delete arr[i];
      }
    }
  }
  let op = [];
  strArray.forEach((arr) => {
    let temp;
    temp = arr.filter((str) => {
      return str !== undefined;
    });
    op.push(temp);
  });
  return op;
};

console.log(
  solve([
    ["red", "blue", "yellow", "blue"],
    ["blue", "orange"],
  ])
);*/

/*//226 //column traversal
const solve = (intArr) => {
  let st = undefined;
  let ed = undefined;
  let interval = 1e8;
  for (let i = 0; i < intArr.length; i++) {
    let start = undefined;
    let end = undefined;
    let tempInterval;
    for (let j = 0; j < intArr[i].length; j++) {
      if (j === 0) start = intArr[j][i];
      if (j === intArr[i].length - 1) end = intArr[j][i];
    }
    tempInterval = end - start;
    if (tempInterval < interval) {
      interval = tempInterval;
      st = start;
      ed = end;
    }
  }
  return [st, ed];
};
console.log(
  solve([
    [1, 1000, 10],
    [50, 1005, 20],
    [100, 2000, 30],
  ])
);*/
/*
//202
const solve = (intArr) => {
  for (let i = 1; i < intArr.length; i++) {
    let count = 0;
    for (let j = 0; j < intArr[i].length; j++) {
      if (intArr[j][i] === 1 || intArr[i][j] === 1) count++;
      else break;
    }
    if (count === intArr[i].length || count === intArr.length) return true;
  }
  return false;
};
console.log(
  solve([
    [0, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
  ])
);
*/
