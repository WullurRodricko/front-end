// JavaScript Array
// Deklarasi Array
// Cara 1. Array Literal
// let numbers = [1,2,3,4,5];
// console.log(numbers);

// Cara 2. Kata kunci new
// let numbers2 = new Array (6,7,8,9,10);
//console.log(numbers2);


// tipe data yang bisa disimpan didalam array
let numbers = [1, 2, 3, 4, 5];
let students = ["John","Jane","Bob"];
let John = ["John", 30, true, [80, 90, 100]];
console.log(John);

// Array length
console.log(numbers.length);
console.log(students.length);
console.log(John.length);

// Mengakses element data tertentu didalam array
// Melalui index array. index selalu dimulai dari 0
console.log(numbers[2]);
console.log(students[1]);
console.log(John[2]);
console.log(John[3][1]);

// mengakses element data terakhir dalam array
let numbers2 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers2[numbers2.length - 1]);

// Array method
let array = [1, 2, 3, "hallo", false, true];
console.log(array);

// 1. toString()
console.log(array.toString());

// 2. join()
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("-"));

// 3. pop()
array.pop();
console.log(array)

// 4. push()
array.push();
console.log(array);

// 5.shift()
array.shift();
console.log(array);

// 6. unshift()
array.unshift();
console.log(array);

// 7. splice()
array.splice(3, 1);
console.log(array);
array.splice(3, 1, 4, 5);
console.log(array);

// 8. concat()
let buah = ["pisang", "apel", "bayam"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

// 9. slice()
let sayuran = makanan.slice(3, 6);
console.log(sayuran);     //tomat, bayam, wortel
let bijian = makanan.slice(6);
console.log(bijian);      //kedelai, kacang tanah, kacang polong


