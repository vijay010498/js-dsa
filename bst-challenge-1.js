// // // class BSTNode {
// // //   constructor(value) {
// // //     this.value = value;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }
// // //
// // // class BST {
// // //   constructor() {
// // //     this.root = null;
// // //   }
// // //
// // //   insert(city) {
// // //     // Complete insert function
// // //   }
// // //
// // //   find(city) {
// // //     // Complete Find Function
// // //   }
// // //
// // //   findPathFromRootCity(city) {
// // //     // Complete this function to find path to destination city
// // //     // Ex Case : I/P ={name: "Gujarat",distanceFromRoot: 70} O/p = "vizag->chennai->Mumbai->Kolkata->Gujarat"
// // //   }
// // // }
// // //
// // // const rootCity = {
// // //   name: "vizag",
// // //   distanceFromRoot: 50,
// // // };
// // // const cityData = [
// // //   {
// // //     name: "chennai",
// // //     distanceFromRoot: 55,
// // //   },
// // //   {
// // //     name: "Salem",
// // //     distanceFromRoot: 30,
// // //   },
// // //   {
// // //     name: "Goa",
// // //     distanceFromRoot: 40,
// // //   },
// // //   {
// // //     name: "Delhi",
// // //     distanceFromRoot: 20,
// // //   },
// // //   {
// // //     name: "Mumbai",
// // //     distanceFromRoot: 60,
// // //   },
// // //   {
// // //     name: "Kolkata",
// // //     distanceFromRoot: 65,
// // //   },
// // //   {
// // //     name: "Bangalore",
// // //     distanceFromRoot: 52,
// // //   },
// // //   {
// // //     name: "Pondicherry",
// // //     distanceFromRoot: 62,
// // //   },
// // //   {
// // //     name: "Punjab",
// // //     distanceFromRoot: 58,
// // //   },
// // //   {
// // //     name: "Gujarat",
// // //     distanceFromRoot: 70,
// // //   },
// // // ];
// //
// // class BSTNode {
// //   constructor(value) {
// //     this.value = value;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }
// //
// // class BST {
// //   constructor() {
// //     this.root = null;
// //   }
// //
// //   insert(city) {
// //     // Complete insert function
// //     const newCity = new BSTNode(city);
// //     if (!this.root) {
// //       this.root = newCity;
// //     } else {
// //       let currentCity = this.root;
// //       while (true) {
// //         if (city.distanceFromRoot > currentCity.value.distanceFromRoot) {
// //           // Right
// //           if (!currentCity.right) {
// //             currentCity.right = newCity;
// //             return;
// //           } else currentCity = currentCity.right;
// //         } else if (city.distanceFromRoot < currentCity.value.distanceFromRoot) {
// //           // Go Left
// //           if (!currentCity.left) {
// //             currentCity.left = newCity;
// //             return;
// //           } else currentCity = currentCity.left;
// //         }
// //       }
// //     }
// //   }
// //
// //   find(city) {
// //     // Complete Find Function
// //   }
// //
// //   findPathFromRootCity(city) {
// //     // Complete this function to find path to destination city
// //     // Ex Case : I/P = Gujarat / O/p = [vizag,chennai,mumbai,Kolkata,Gujarat]
// //     const path = [];
// //     if (!this.root) return "Not A valid Tree ";
// //     if (this.root.value.name === city.name) return "Root City";
// //     let currentCity = this.root;
// //     while (true) {
// //       path.push(currentCity.value.name);
// //       if (city.name === currentCity.value.name) return path.join("->");
// //       if (city.distanceFromRoot < currentCity.value.distanceFromRoot) {
// //         // Will be in the left
// //         if (!currentCity.left) {
// //           return `${city.name} Can't be reached`;
// //         } else {
// //           currentCity = currentCity.left;
// //         }
// //       } else if (city.distanceFromRoot > currentCity.value.distanceFromRoot) {
// //         if (!currentCity.right) {
// //           return `${city.name} Can't be reached`;
// //         } else {
// //           currentCity = currentCity.right;
// //         }
// //       }
// //     }
// //   }
// // }
// //
// // const ROOT_CITY = {
// //   name: "vizag",
// //   distanceFromRoot: 50,
// // };
// // const CITY_DATA = [
// //   {
// //     name: "chennai",
// //     distanceFromRoot: 55,
// //   },
// //   {
// //     name: "Salem",
// //     distanceFromRoot: 30,
// //   },
// //   {
// //     name: "Goa",
// //     distanceFromRoot: 40,
// //   },
// //   {
// //     name: "Delhi",
// //     distanceFromRoot: 20,
// //   },
// //   {
// //     name: "Mumbai",
// //     distanceFromRoot: 60,
// //   },
// //   {
// //     name: "Kolkata",
// //     distanceFromRoot: 65,
// //   },
// //   {
// //     name: "Bangalore",
// //     distanceFromRoot: 52,
// //   },
// //   {
// //     name: "Pondicherry",
// //     distanceFromRoot: 62,
// //   },
// //   {
// //     name: "Punjab",
// //     distanceFromRoot: 58,
// //   },
// //   {
// //     name: "Gujarat",
// //     distanceFromRoot: 70,
// //   },
// // ];
// //
// // const myBST = new BST();
// // myBST.insert(ROOT_CITY);
// // for (city of CITY_DATA) {
// //   myBST.insert(city);
// // }
// // console.log(
// //   myBST.findPathFromRootCity({
// //     name: "Punjab",
// //     distanceFromRoot: 58,
// //   })
// // );
//
// // class Helper {
// //   constructor(name) {
// //     this.name = name;
// //     console.log("---Helper", name);
// //   }
// //   getName() {
// //     return this.name;
// //   }
// // }
// //
// // class AutoComplete extends Helper {
// //   constructor(name) {
// //     super(name);
// //     this.name = name;
// //     console.log("--AutoComplete", name);
// //     console.log(this.getName());
// //   }
// // }
// //
// // const c1 = new AutoComplete("vijay");x
// // console.log(c1.getName());
//
// // const props = {
// //   data: {},
// // };
// //
// // console.log(props.data.metadata.inputs);
//
// const soln = (s) => {
//   const v = "aeiou";
//   let max = 0;
//   const vowelsStart = [];
//   s.split("").filter((c, index) => {
//     if (c === "a") return vowelsStart.push(index);
//   });
//   while (vowelsStart.length) {
//     console.log(vowelsStart);
//     let tempMax = 0;
//     let vp = 0;
//     let sp = vowelsStart.shift();
//     let lastChar = s[sp];
//     while (sp <= s.length - 1) {
//       console.log("---comparing---", s[sp], v[vp], sp, vp, tempMax, lastChar);
//       if (s[sp] === v[vp] || s[sp] === lastChar || s[sp] === v[vp + 1]) {
//         if (vp < v.length - 1) vp++;
//         lastChar = s[sp];
//         sp++;
//         tempMax++;
//       } else {
//         sp++;
//       }
//     }
//     console.log("--tempmax--", tempMax);
//     max = Math.max(max, tempMax);
//   }
//   return max;
// };
//
// const soln1 = (s) => {
//   let max = 1;
//   const vMap = {
//     a: 0,
//     e: 1,
//     i: 2,
//     o: 3,
//     u: 4,
//   };
//   const vowelsStart = [];
//   s.split("").filter((c, index) => {
//     if (c === "a") return vowelsStart.push(index);
//   });
//   console.log(vowelsStart);
//   for (let i = 0; i < vowelsStart.length; i++) {
//     let tempMax = 1;
//     let currVVAlue = 0;
//     for (let j = vowelsStart[i]; j
//     <= s.length - 1; j++) {
//       if (vMap[s[j]] && vMap[s[j]] >= currVVAlue) {
//         tempMax++;
//         currVVAlue = vMap[s[j]];
//       }
//     }
//     max = Math.max(max, tempMax);
//   }
//   return max;
// };
// console.log(soln1("aeiaaioooaauuaeiu"));

const objectPath = require("object-path");
const tree = {
  inputs: {
    Address: "Address",
    Employee: {
      name: "name",
      location: "location",
    },
  },
};

const tree1 = {
  inputs: {},
  outputs: {},
};

// objectPath.set(tree1, "inputs.textField", "textField");
// objectPath.set(tree1, "inputs.age", "age");
// objectPath.set(tree1, "inputs.location", "location");
// objectPath.set(tree1, "inputs.textField.name", "name");
// console.log(objectPath.get(tree1, "inputs"));
//
// const str = "input.Employee.name input.User.";
// const slicedStr = str.slice(0, str.length - 1);
// const strArr = slicedStr.split(" ");
// console.log(strArr[strArr.length - 1].split("."));

// const replaceMap = {
//   ".ip": ".input",
//   '.op': "output",
// };
// let str1 = "$.ip.newNumberFieldIp. $.op.newNumber.";
// str1 = str1.replace(/.ip|.op/g, (match) => {
//   return replaceMap[match];
// });
//
// console.log(str1);
//
// const str2 = str1.slice(0, str1.length - 1);
// console.log(str2);
//
// const strArr = str2.split(" ");
// console.log(strArr);
//
// const suggestions = strArr[strArr.length - 1].split(".");
// console.log(suggestions);

const obj1 = {
  name: { d: "d" },
  type: { t: "t" },
  data: {
    inputs: [],
  },
};

const obj2 = {
  name: "myfield",
  type: "text",
};

//const objjj = Object.assign({ name: "myField", type: "text" }, obj1);

const objjj = {
  ...obj1,
  ...{
    name: "myfield",
    type: "text",
  },
};
const arr = [{ ...obj1, ...{ name: "myField" } }];
console.log(arr);
