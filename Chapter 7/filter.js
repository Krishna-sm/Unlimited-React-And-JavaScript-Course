 
// ## ✅ SIMPLE LEVEL – Basic Use of `.filter()`
 
/*
Q1: Given an array of numbers [1, 2, 3, 4, 5], use filter() to return only even numbers.
*/
// map,filter,reduce ye return karte hain to hamesha result return hi milega
// const arr = [1, 2, 3, 4, 5]
// // undefine null 0 '' false

// function isEven(cur){
//     return cur%2===0 
// }

// function isOdd(cur){
//     return cur%2!==0
// }



// const result = arr.filter(isEven)
// const result = arr.filter(isOdd)
// const result = arr.filter(function(cur,index,arr){
//     // const isTrue = cur%2==0
//     const isTrue = cur%2!=0
//     return isTrue == true ? true : false
// })

// console.log(result);

























/*
Q2: From the array ['apple', 'banana', 'cherry', 'date'], filter out the fruits that start with the letter 'b'.
*/

// const fruits =  ['apple', 'banana', 'cherry', 'date']

// const result = fruits.filter((cur)=>{
//     return cur.startsWith('b') || cur.includes('y') || cur.endsWith('e')
// })

// console.log(result);






















/*
Q3: Given an array [0, 1, '', 'hello', null], filter out all falsy values.
*/


// const arr = [0, 1, '', 'hello', null]
// // const truthy = arr.filter((cur)=>{
// //     return cur
// // })
// const fasly = arr.filter((cur)=>{
//     return !cur
// })

// console.log(fasly);












/*
Q4: Given an array of names ['John', 'Jill', 'Alan', 'Jack'], return only names that start with 'J'.
*/

// const arr =  ['John', 'Jill', 'Alan', 'Jack']

// const result =arr.filter((cur)=>{
//     return !cur.startsWith('J')
// })

// console.log(result);



// const str = "Hi my         name is Krishna              i am a full stack    developer".split(" ")

// // console.log(str);
// function capitalize(str){
//   return  str[0].toUpperCase()+str.substring(1)
// }

// const str_filter = str.filter(cur=>cur)
// const result = str_filter.map(capitalize)

// console.log(result.join(" "));












/*
Q5: Filter out negative numbers from the array [10, -5, 3, -2, 7, -8].
*/

// const arr = [10, -5, 3, -2, 7, -8]



// // const result = arr.filter(cur=>cur<0)
// const result = arr.filter(cur=>cur>0)
// console.log(result);









 
 

// ## 🔄 INTERMEDIATE LEVEL – Logical Filtering
 
/*
Q6: From an array of strings ['short', 'average', 'lengthyword'], return only words with length > 5.
*/

// const arr = ['short', 'average', 'lengthyword']
// const result = arr.filter((cur,i)=>{
//     return cur.length>5
// })
// console.log(result);











/*
Q7: Given an array of numbers [2, 4, 5, 6, 8], filter out odd numbers and return the even ones.
*/


// const arr  =[2, 4, 5, 6, 8]

// const result  = arr.filter((cur)=>cur%2==0)
// console.log(result);










/*
Q8: From an array of user objects:
[
  { name: 'Aman', age: 21 },
  { name: 'Ravi', age: 17 }
]
Filter out users who are not adults (age < 18).
*/
// const users = [
//   { name: 'Aman', age: 21 },
//   { name: 'Ravi', age: 17 },
//   { name: 'Krishna', age: 16},
// ]



// const result = users.filter((cur,i)=>{
//     return cur.age<18
// })
// console.log(result);




/*
Q9: Filter all elements that are not numbers from this array:
[1, 'two', 3, 'four', true, null]
*/

// console.log(isNaN('two'));
// console.log(isNaN(2));
// const arr = [1, 'two', 3, 'four', true, null]
// const result = arr.filter((cur)=>{
//     return !Number(String(cur))
// })
// console.log(result);
// console.log(isNaN(null));













/*
Q10: From an array of student marks [45, 89, 32, 70, 60], filter marks that are 60 or above.
*/
 
// const arr  =[45, 89, 32, 70, 60]
// const result =arr.filter((cur)=>cur>=60)
// console.log(result);








 

// ## 🚀 ADVANCED LEVEL – Complex Filtering & Nested Structures
 
/*
Q11: Given an array of products:
[
  { name: 'Laptop', inStock: true },
  { name: 'Mouse', inStock: false }
]
Filter products that are in stock.
*/

// const products  =[
//   { name: 'Laptop', inStock: true },
//   { name: 'Mouse', inStock: false }
// ]
// const stockedData = products.filter(cur=>cur.inStock)
// console.log(stockedData);








/*
Q12: Filter out duplicate values from an array: [1, 2, 2, 3, 4, 4, 5]
(Hint: Use filter with indexOf)
*/
// const arr = [1, 2, 2, 3, 4, 4, 5]

// const result = new Set(arr)
// console.log([...result]);

// const result = arr.filter((cur,i)=>{
 
//     return arr.indexOf(cur) === i
 
// })

// console.log(result)






/*
Q13: Given an array of strings, return only those that contain the letter 'a'.
Input: ['cat', 'dog', 'bat', 'cow']
*/

// const arr = ['cat', 'dog', 'bat', 'cow','ani','ena']

// // const result =arr.filter(cur=>cur.includes('a'))
// const result =arr.filter(cur=>{
//     return cur.includes('a') && !cur.startsWith('a') && !cur.endsWith('a')
// })
// console.log(result);











/*
Q14: From an array of dates as strings, filter out only those in the year 2024.
Input: ['2023-11-05', '2024-01-01', '2025-06-12']
*/

// function FilterDate(date){
//     const x = parseInt(date.split("-")[0])
//     return x==2024
// }
// const arr = ['2023-11-05', '2024-01-01', '2025-06-12']

// const data = arr.filter(FilterDate)
// console.log(data);




/*
Q15: Filter prime numbers from an array [2, 3, 4, 5, 6, 7, 8, 9, 10]
(Hint: Write a helper isPrime function)
*/

// function isPrime(num){

//     let isPrimeNo = true 

//     for(let i=2;i<=parseInt(num/2);i++){
//         if(num%i===0){
//             isPrimeNo = false 
//             break
//         }
//     }

//     return isPrimeNo

// }
 
// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const result = arr.filter(isPrime)
// const result = arr.filter(cur=>!isPrime(cur))
// console.log(result);









/*
Q16: Given an array of nested arrays, return only those arrays that have more than 2 elements.
Input: [[1,2], [3,4,5], [6], [7,8,9]]
*/

// const arr = [[1,2], [3,4,5], [6], [7,8,9]]
// const result = arr.filter(cur=>cur.length>2)


// console.log(result);






/*
Q17: Filter out all strings that are palindromes.
Input: ['madam', 'hello', 'racecar', 'apple']
*/

// const strings =  ['madam', 'hello', 'racecar', 'apple','naman','eye']

// function isPalidrom(str){
//     return str.split("").reverse().join("") ===str 
// }

// // console.log(isPalidrom());
// const result = strings.filter(isPalidrom)
// console.log(result);










/*
Q18: From an array of temperatures [22, 35, 40, 28], return only those above 30°C.
*/

// const temperates = [22, 35, 40, 28]
// // const celcilus = temperates.map(c=>(c - 32) * 5/9 )
// console.log(temperates.filter(c=>c>30));








/*
Q19: Filter an array of user objects to return only those whose email ends with "@gmail.com"
*/

// const users = [
//     'krishna@gmal.com',
//     'harish@fadsa@gmail.com',
//     'raghva@gmail.com',
//     'dads@yopmail.com',
// ]

// function isValidEMail(email){
//     const [username,domin] = email.split("@")
//     return domin==="gmail.com"

// }
// // const validUsers = users.filter(c=>c.endsWith('@gmail.com'))
// const validUsers = users.filter(isValidEMail)
// console.log(validUsers);







/*
Q20: From a list of mixed values: [null, undefined, 0, NaN, '', 'JS', 42], keep only truthy values.
*/
 
// const arr =  [null, undefined, 0, NaN, '', 'JS', 42]
// const result = arr.filter(c=>!c)
// console.log(result);

