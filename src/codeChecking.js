// const obj = { a: 1, b: 2, c: 3 };
// const { a, b } = obj;
// console.log(a, b);

// let aa=[1,2,3]
// const [ab, , bc]=aa;
// console.log(ab,bc);

// const companies = [
//     { id: "1", name: "Facebook" },
//     { id: "2", name: "Apple" },
//     { id: "3", name: "Google" },
//   ];
  
//   companies.sort((a, b) => (a.name > b.name ? -1 : 1));
//   console.log(companies);
  
// function getType(value) {
//     return typeof value;
// }

//   console.log(getType(42));
// console.log(getType("Hello"));
// console.log(getType(true));
// console.log(getType([1, 2, 3]));
// console.log(getType({ name: "John", age: 25 }));
// console.log(getType(null));
// console.log(getType(undefined));
// console.log(getType(function () {}));

// let x = 10;

// function updateX() {
//   if (true) {
//     let x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }

// updateX();

// let x = 10;

// function outer() {
//     console.log(x);

//     if (false) {
//       var x = 20;
//     }
// }
// outer();

// var x = 0;
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     x++;
//     console.log(x);
//   }, 1000);
// }

// .18 Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array.
 
// write a programe to implememnt the bank application

// let numbers = [1, 2, 3, 4, 5];
// numbers = numbers.map((number) => number * 2);
// console.log(numbers.reduce((total, num) => total + num));

// let num1=1;
// let num2=2;

// function interchange(n1,n2) {
//     n1=n1^n2;
//     n2=n1^n2;
//     n1=n1^n2;

//     console.log(n1,n2);
// }
// interchange(num1, num2)


// function parentFun() {
//     function sib1() {
//         var a=12;
//         sib2(a);
//         function ssib1(aa) {
//             return aa*12;
//         }
//         return ssib1(a);
//       }
//     function sib2(x) {
//         console.log(x);
//     }
//     return sib1()
// }

// const myfun=parentFun();
// console.log(myfun);

// setTimeout(()=>{
//     console.log("hello world");
// },1000)

//  setTimeout(()=>{
//     return new Promise((resolve, reject) => {
//        const a= true;
//        if (true) {
//         resolve("hii")
//        } 
//        else{
//         reject("reject")
//        }
//     })
// }, 2000)


