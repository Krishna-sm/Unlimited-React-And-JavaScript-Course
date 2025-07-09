// // ------------------ SIMPLE LEVEL QUESTIONS ------------------

// /*
// Q1: What will be the output of the following map function?
// Expected: Multiply each number by 2
// */
 

// const arr = [1,2,3,4]
// // [2,4,6,8]
// // [1,4,9,16]
// //jo hmaesh return karta hain
// const result = arr.map((cur)=>{
//   return cur**2
// })
// console.log(result);



// const new_arr =arr.map(function(cur,index,array){
//   return   {
//     value:cur,
//     result:cur*2
//   }
// })

// console.log(new_arr)
















// /*
// Q2: Create a new array by subtracting 1 from each number in the array.
// Input: [5, 10, 15, 20]
// Expected Output: [4, 9, 14, 19]
// */ 

// const arr = [5, 10, 15, 20]
// function subTractBy1(arg){
//   return arg-1
// }

// const new_arr = arr.map( subTractBy1)

// console.log(new_arr);














// /*
// Q3: Convert names into greetings using map.
// Input: ['John', 'Jane']
// Expected Output: ['Hello John', 'Hello Jane']
// */ 

// const arr = ['John', 'Jane']

// function greet(name){
//   return 'Hello '+name
// }

// const new_arr = arr.map(greet)
// console.log(new_arr);









// /*
// Q4: Can map() be used directly on a string?
// Try this:
// 'hello'.map(char => char.toUpperCase());
// What happens and why?
// */ 


// const str = 'hello'.split('')
 
// const result = str.map(char => char.toUpperCase())


// console.log(result.join(""));

// const str = "hi my name is             krishna                  and i am full stack developer".split(" ")

// // console.log(str);
// function capitalize(arg){
//   if(!arg){
//     return ''
//   }
//   return arg[0].toUpperCase()+arg.substring(1)
// }
// const result =str.map(capitalize)
// console.log(result.join(" "));







// /*
// Q5: Predict the output.
// What will be the result of this map call?
// */
// [1, 2, 3].map(() => 100);


// const result =[1, 2, 3].map(() => 100);

// console.log(result);












// /*
// Q6: What does the map below return?
// Check Boolean conversion of each value.
// */
// [true, false, 0, 1, "", "hi"].map(Boolean);

// '',0,undefinf,null,false



// const result = [true, false, 0, 1, "", "hi"].map(Boolean);


// console.log(result);









// /*
// Q7: Fix the code. map is used incorrectly here.
// */
// const result = [1, 2, 3].map(n => n + 1); // Correct usage



//  const result = [1, 2, 3].map(n => n + 1);


//  console.log(result);
 







// // ------------------ INTERMEDIATE LEVEL QUESTIONS ------------------

// /*
// Q8: Map age to 'minor' or 'adult'.
// Input: [15, 22, 30]
// Output: ['minor', 'adult', 'adult']
// */
//  

// function conisderAge(age){
//   if(age>18){
//     return 'adult'
//   }else{
//     return 'minor'
//   }
// }

// const arr = [15, 22, 30]
// const result = arr.map(
// function(age){
//   if(age>18){
//     return 'adult'
//   }else{
//     return 'minor'
//   }
// })

// console.log(result);








// /*
// Q9: Convert numbers to strings.
// Input: [1, 2, 3]
// Output: ['1', '2', '3']
// */ 

// number -> String(),``,+""

// const arr = [1,2,3,4,5,6]
// const result = arr.map(String)
// const result = arr.map((cur)=>cur+"") 
// const result = arr.map((cur)=>`${cur}`) 
// console.log(result);








// /*
// Q10: Capitalize first letter of each word.
// Input: ['apple', 'banana']
// Output: ['Apple', 'Banana']
// */ 














// /*
// Q11: Use map to return 'Even' or 'Odd' for numbers.
// Input: [1, 2, 3, 4, 5]
// Output: ['Odd', 'Even', 'Odd', 'Even', 'Odd']
// */ 

// const arr = [1, 2, 3, 4, 5]
// function evenOdd(num){
//   return num%2==0?'even':'odd'
// }
// const new_no = arr.map(evenOdd)
// console.log(new_no);









// SIP
// SI,CI
// BMI

// /*
// Q12: Add 10% discount to all prices.
// Input: [100, 200]
// Output: [90, 180]
// */
// [100, 200].map(price => price - price * 0.10);









// /*
// Q13: Prepend "User: " to each name.
// Input: ['Krish', 'Radha', 'Mohan']
// Output: ['User: Krish', 'User: Radha', 'User: Mohan']
// */ 

// const arr = ['Krish', 'Radha', 'Mohan']
// const result = arr.map((cur)=>`User: ${cur}`)

// console.log(result);










// /*
// Q14: Get the length of each word.
// Input: ['code', 'js', 'react']
// Output: [4, 2, 5]
// */ 
// function strLen(str){
//   return str.length
// }

// const arr = ['code', 'js', 'react']
// const new_arr=arr.map(strLen)
// console.log(new_arr);








// // ------------------ ADVANCED LEVEL QUESTIONS ------------------

// /*
// Q15: Convert array of numeric strings to numbers.
// Input: ['1', '2', '3']
// Output: [1, 2, 3]
// */ 

// const arr =  ['1', '2', '3']
// // string -> Number,parseInt

// // const arrd = arr.map(Number)
// const arrd = arr.map(cur=>parseInt(cur))
// console.log(arrd);











// /*
// Q16: What will this return and why?
// This is a famous JS interview trick question.
// */
// ['10', '10', '10'].map(parseInt); // Output: [10, NaN, 2] → WHY?















// /*
// Q17: Extract names from array of objects.
// Input: [{name: "Krishna", marks: 80}, {name: "Radha", marks: 90}]
// Output: ['Krishna', 'Radha']
 

// const arr =
//  [{name: "Krishna", marks: 80},
//    {name: "Radha", marks: 90}]

//    const new_arr = arr.map((cur,i)=>{
//     return cur.name
//    })
// console.log(new_arr);










// /*
// Q18: Combine name and marks into a string.
// Output: ['Krishna: 80', 'Radha: 90']
// */
// [
//   {name: "Krishna", marks: 80},
//   {name: "Radha", marks: 90}
// ];
// const arr = ['Krishna: 80', 'Radha: 90']

// function extraction(str){
//     const [name,marks] =str.split(" ")
//     return {
//       name : name.substring(0,name.length-1),
//       marks:parseInt(marks)
//     }
// }
// const new_arr = arr.map(extraction)

// console.log(new_arr);









// /*

// Q19: Add index to each value in the array.
// Input: [5, 10, 15]
// Output: [5, 11, 17] (5+0, 10+1, 15+2)
// */ 









// /*
// Q20: Build an array of objects from a list of strings.
// Input: ['html', 'css', 'js']
// Output: [{tech: 'html', id: 1}, {tech: 'css', id: 2}, {tech: 'js', id: 3}]

// */ 

// const arr  = ['html', 'css', 'js']

// function generateData(cur,i){
//   return {
//     tech:cur,
//     id:i+1
//   }
// }
// const new_arr = arr.map(generateData)

// console.log(new_arr);













