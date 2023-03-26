// class BSTNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
//
// class BST {
//   constructor(rootCity) {
//     const rootNode = new BSTNode(rootCity.distanceFromRoot);
//     this.root = rootNode;
//   }
//
//   insert(city) {
//     const newNode = new BSTNode(city); // Complete insert function
//     if (!this.root) {
//       this.root = newNode;
//       return;
//     } else {
//       let currentNode = this.root;
//       //   console.log(currentNode)
//       while (true) {
//         if (city < currentNode.value) {
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             return;
//           } else {
//             currentNode = currentNode.left;
//           }
//         } else if (city > currentNode.value) {
//           if (!currentNode.right) {
//             currentNode.right = newNode;
//             return;
//           } else {
//             currentNode = currentNode.right;
//           }
//         }
//       }
//     }
//   }
//
//   findPathFromRootCity(city) {
//     // Complete this function to find path to destination city
//     // Ex Case : I/P ={name: "Gujarat",distanceFromRoot: 70} O/p = "vizag->chennai->Mumbai->Kolkata->Gujarat"
//     let currentNode = this.root;
//     const map = [];
//     map.push(currentNode.value);
//     while (true) {
//       if (city === currentNode.value) {
//         map.push(currentNode.value);
//         return map;
//       } else {
//         if (city < currentNode.value) {
//           if (city === currentNode.left.value) {
//             map.push(currentNode.left.value);
//             return map;
//           } else {
//             currentNode = currentNode.left;
//             map.push(currentNode.value);
//           }
//         } else {
//           if (city === currentNode.right.value) {
//             map.push(currentNode.right.value);
//             return map;
//           } else {
//             currentNode = currentNode.right;
//             map.push(currentNode.value);
//           }
//         }
//       }
//     }
//   }
// }
//
// const rootCity = {
//   name: "vizag",
//   distanceFromRoot: 50,
// };
// const cityData = [
//   {
//     name: "chennai",
//     distanceFromRoot: 55,
//   },
//   {
//     name: "Salem",
//     distanceFromRoot: 30,
//   },
//   {
//     name: "Goa",
//     distanceFromRoot: 40,
//   },
//   {
//     name: "Delhi",
//     distanceFromRoot: 20,
//   },
//   {
//     name: "Mumbai",
//     distanceFromRoot: 60,
//   },
//   {
//     name: "Kolkata",
//     distanceFromRoot: 65,
//   },
//   {
//     name: "Bangalore",
//     distanceFromRoot: 52,
//   },
//   {
//     name: "Pondicherry",
//     distanceFromRoot: 62,
//   },
//   {
//     name: "Punjab",
//     distanceFromRoot: 58,
//   },
//   {
//     name: "Gujarat",
//     distanceFromRoot: 70,
//   },
// ]; // Use for loop to insert all data into BST
//
// const myBST = new BST(rootCity);
// for (let i = 0; i < cityData.length; i++) {
//   myBST.insert(cityData[i].distanceFromRoot);
// }
//
// console.log(myBST.findPathFromRootCity(70));

const soln = (k, weights) => {
  let i = 0;
  let j = weights.length - 1;
  let totalSegments = 0;
  weights = weights.sort((a, b) => {
    return a - b;
  });
  while (i <= weights.length - 1) {
    const max = weights[j];
    const min = weights[i];
    const maxSegments = max - min;
    maxSegments <= k ? totalSegments++ : null;
    console.log(`(${min},${max})  = (${max} - ${min}) => ${maxSegments}`);
    if (i === j) {
      j = weights.length - 1;
      i++;
    } else {
      j--;
    }
  }
  return totalSegments;
};

console.log(soln(3, [1, 5, 4]));
