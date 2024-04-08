// 1-masala

// let sinNumber = function(nums) {
//     let count = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (count[nums[i]] === undefined) {
//             count[nums[i]] = 1;
//         } else {
//             count[nums[i]]++;
//         }
//     }

//     for (let key in count) {
//         if (count.x(key) && count[key] === 1) {
//             console.log('Takrorlanmagan element: ' + key);
//             return parseInt(key);
//         }
//     }
// };

// sinNumber([4, 1, 2, 1, 2, 9]); 

// 2-masala 

// const search = function(nums, target) {
//     for (let num of nums) {
//         if (num === target) {
//             return true;
//         }
//     }
//     return false;
// }

// const nums = [2, 5, 6, 0, 0, 1, 2];
// const target = 0;

// console.log(search(nums, target))

// 3-masala

// const a = function(nums) {
//     const result = [];
//     for (let num of nums) {
//         if (!result.includes(num)) {
//             result.push(num);
//         }
//     }
//     return result;
// }

// const array = [1, 1, 2, 3, 3];
// const xy = a(array);

// console.log(xy); 

// 4-masala

// Shallow copy
// let obj = { a: 1, b: { c: 2 } };
// let shallowCopy = Object.assign({}, obj);

// console.log(shallowCopy); 

// Deep copy
// function deepCopy(obj) {
//     let result = {};
//     for (var key in obj) {
//       if (typeof obj[key] === 'object') {
//         result[key] = deepCopy(obj[key]);
//       } else {
//         result[key] = obj[key];
//       }
//     }
//     return result;
//   }
  
//   let obj = { a: 1, b: { c: 2 } };
//   let deepCopied = deepCopy(obj);
  
//   console.log(deepCopied); 
  
// Object spread operator
// let obj = { a: 1, b: { c: 2 } };
// let spreadCopy = { ...obj };

// console.log(spreadCopy); 

// 5-masala

// let arr = [4, 6, 22, 11];

// // 20 ta random sonlar to'plami yaratish
// for (let i = 0; i < 20; i++) {
//     let randomSon = Math.floor(Math.random() * 20) + 1; // 1 dan 20 gacha bo'lgan random son
//     // Oxirgi elementning juftligini tekshirish
//     if ((arr[arr.length - 1] + randomSon) % 2 === 0) {
//         // Agar juft bo'lsa
//         if (arr[arr.length - 1] === 6) {
//             arr[arr.length - 1] = 5;
//         } else {
//             arr[arr.length - 1] = 6;
//         }
//     }
//     arr.push(randomSon); 
// }

// console.log(arr);

// 6-masala

// let nums = [2, 2, 1, 3, 2, 8]; 

// let counts = {}; 

// for (let num of nums) {
//     if (counts[num]) {
//         counts[num]++;
//     } else {
//         counts[num] = 1;
//     }
// }

// let x = null;
// let xy = 0;

// for (let num in counts) {
//     if (counts[num] > xy) {
//         xy = counts[num];
//         x = num;
//     }
// }

// let maxNum = Math.max(...nums);
// let minNum = Math.min(...nums);

// let a = Math.abs(x - maxNum);

// console.log("Eng katta takrorlangan son: " + x);
// console.log("Eng kattasi: " + maxNum);
// console.log("Eng kichigi: " + minNum);
// console.log("Farq: " + a);

// // 7-masala

// var obj1 = {
//     value: [5, 8, 2, 10] 
//   };
  
//   var obj2 = {
//     value: [3, 1, 7, 4] 
//   };
  
//   function x(obj) {
//     var max = Math.max(...obj.value);
//     var min = Math.min(...obj.value);
//     return {
//       max: max,
//       min: min,
//       result: Math.pow(max, min) 
//     };
//   }
  
//   console.log("Obj1: ", x(obj1));
//   console.log("Obj2: ", x(obj2));
  
// 8-masala

// let arr = [1, 2, 3, 14];

// let juftSum = arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);

// let juftSumStr = juftSum.toString();
// let juftSum2 = juftSumStr.split('').map(Number);
// let juftSum3 = juftSum2.reduce((acc, curr) => acc + curr, 0);

// console.log(juftSum3);

// 9-masala

// function x(arr, target) {
//     let result = [];
//     let sumMap = {};

//     for (let i = 0; i < arr.length; i++) {
//         let complement = target - arr[i];
//         if (sumMap[complement] !== undefined) {
//             result.push([complement, arr[i]]);
//         }
//         sumMap[arr[i]] = i;
//     }

//     return result;
// }

// let arr = [1, 2, 3, 12];
// let target = 5;
// let result = x(arr, target);
// console.log(result);

// 10-masala

// function xy(input, callback) {
//     let cleanedInput = input.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
//     let reversedInput = cleanedInput.split('').reverse().join('');
//     if (cleanedInput === reversedInput) {
//         callback(input + " palindrome son");
//     } else {
//         callback(input + " palindrome emas.");
//     }
// }

// function xyz(promptValue) {
//     xy(promptValue, function(result) {
//         console.log(result);
//     });
// }

// let inputValue = prompt("Iltimos, bir son kiriting:");
// xyz(inputValue);

// 11-masala

// function function1(input, callback) {
//     let cleanedInput = input.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');

//     let reversedInput = cleanedInput.split('').reverse().join('');

//     if (cleanedInput === reversedInput) {
//         callback(input + " palindrome hisoblanadi.");
//     } else {
//         callback(input + " palindrome emas.");
//     }
// }

// function function2(promptValue) {
//     function1(promptValue, function(result) {
//         console.log(result);
//     });
// }

// let inputValue = prompt("Iltimos, bir so'z yoki raqam kiriting:");
// function2(inputValue);

// 12-masala

// const sum = (...numbers) => {
//     let sum = numbers.reduce((total, number) => total + number, 0);
//     let x = sum.toString().split('').map(Number);
//     return x;
//   }
  
//   let numbers = [1, 22, 3];
//   let result = sum(...numbers);
//   console.log("result =>", result);  

// 13-masala

// var num = function(l1, l2) {
//     let carry = 0;
//     let result = [];
    
//     for (let i = 0; i < l1.length || i < l2.length; i++) {
//         let x = i < l1.length ? l1[i] : 0;
//         let y = i < l2.length ? l2[i] : 0;
        
//         let sum = x + y + carry;
        
//         carry = Math.floor(sum / 10);
        
//         result.push(sum % 10);
//     }
    
//     if (carry > 0) {
//         result.push(carry);
//     }
    
//     return result;
// }

// let l1 = [2, 4, 3];
// let l2 = [5, 6, 4];
// console.log(num(l1, l2))
