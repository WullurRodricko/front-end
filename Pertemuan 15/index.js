//Asynchronous JS
//Synchronous -> Single thread

// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4"); 

//Asynchronous -> multi thread -> non blocking

//1. Parallel
// setTimeout(() => {
//     console.log("Proses 1");
// }, 5000);
// console.log("Proses 2");
// setTimeout(() => {
//     console.log("Proses 3");
// }, 5000);
// console.log("Proses 4");

//2. Concurrent
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//             setTimeout(() => {
//                 console.log("Proses 4");
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);

//Promise
//Buat promise sederhana
// let condition = true
// const newPromise =  new Promise((resolve, reject) => {
//     if(condition){
//         resolve("Berhasil");
//     }
//     else {
//         reject("Gagal");
//     }
// });

// Pakai Promise

//1. then - catch
// newPromise
//    .then((result) => result)
//    .then((result2) => console.log(result2))
//    .catch((error) => console.log(error));

//2. Async - await
// Harus dibuat dalam fungsi 
// const consumePromise = async () => {
//     let result = await newPromise;
//     console.log(result);
// };
// consumePromise();

//Pakai Promise yang sudah ada

//1. Fetch 
// fetch("http://jsonplaceholder.typicode.com/users")
//    .then((response) => response.json())
//    .then((json) => console.log(json));


fetch("http://jsonplaceholder.typicode.com/users")
   .then((response) => response.json())
   .then((json) => {
       const names = json.map(user => user.name);
       console.log(names);
   });


   const axios = require('axios');


//2. Axios
axios.get('http://jsonplaceholder.typicode.com/users')
  .then((response) => {
    const names = response.data.map(user => user.name);
    console.log(names);
  })
  .catch((error) => console.error('Error:', error));

