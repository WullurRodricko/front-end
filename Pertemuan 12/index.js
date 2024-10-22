// Rest Parameter & Spread Operator

// 1. Rest Parameter
// Digunakan pada saat kita membuat fungsi
// yang memiliki banyak parameter

// fungsi tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) =>
    console.log(param1, param2, param3, param4, param5);

func1("A", "B", "C", "D", "E");

// fungsi dengan rest parameter
const func2 = (...params) => {
    console.log(params);
};
func2("A", "B", "C", "D", "E");

// rest parameter harus berada di terakhir dalam parameter list
const func3 = (param1, param2, ...params) => {
    console.log(param1, param2);
    console.log(params);
};
func3("A", "B", "C", "D", "E");

// mini exercise
const penjumlahan = (a, b, c, d, e, f) => {
    let arr = [a, b, c, d, e, f];
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5, 6));

// 2. Spread Operator
// Digunakan pada Array dan Object, untuk memecah array/object
// menjadi element2 kecil pembentuknya

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

// 1. Duplikasi array
let numbers2 = [...numbers];
console.log(numbers2);

// 2. Menggabungkan Array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let number3 = arr1.concat(arr2, arr3); //ES5
let number4 = [...arr1, ...arr2, ...arr3]; //ES6

// Object
const john = {
    fullName: "John Doe",
    age: 30,
};

// 1. Duplikasi object
const john2 = { ...john, address: "Manado" };

// 2. Menggabungkan object
let obj1 = {a: 1, b: 2 };
let obj2 = {c: 3, d: 4 };
let obj3 = {e: 5, f: 6 };

let combinedObj = { ...obj1, ...obj2, ...obj3 };