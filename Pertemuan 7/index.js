// JavaScript Object and Conditional
// Deklarasi Object
// Object Literal
let john = {
    firstName: "John", //properti & value
    age:30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreetings: function () {
        console.log("Hello my name is " + this.firstName)
    }
};
console.log(john);

// Mengakses properti dalam object
// 1. Dot Notation
console.log(john.firstName); //john
console.log(john.age); //30
john.age = 31; //ubah nilai
console.log(john);
john.job = "Teacher"; // tambah properti baru
console.log(john);
// 2.bracket notation
console.log (john["isMarried"]); //true
john["Nationality"] = "Indonesia"; //Tambah Properti Baru
console.log(john);

// Object Method
john.sayGreetings();
