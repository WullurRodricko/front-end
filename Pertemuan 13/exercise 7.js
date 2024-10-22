// 1. Destructuring Array & Object
// Array Destructuring
let array = [1, 2, 3];
let [a, b, c] = array;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Object Destructuring
let person = { name: 'John', age: 30 };
let { name: personName, age } = person;
console.log(personName); // John
console.log(age);        // 30



// 2. Destructuring dengan mengambil sebagian item 
// Ambil sebagian item dari array
let array2 = [10, 20, 30, 40];
let [first, , third] = array2; // Abaikan elemen kedua
console.log(first); // 10
console.log(third); // 30

// Ambil sebagian property dari object
let car = { brand: 'Toyota', model: 'Corolla', year: 2021 };
let { brand, year } = car;
console.log(brand); // Toyota
console.log(year); // 2021



// 3. Destructuring dengan menggunakan default value
// Default value jika tidak ada elemen
let array3 = [100];
let [x = 10, y = 20] = array3;
console.log(x); // 100
console.log(y); // 20 (default value)

// Default value jika property tidak ada
let person2 = { firstName: 'Alice' };
let { firstName, lastName = 'Doe' } = person2;

console.log(firstName); // Alice
console.log(lastName);  // Doe (default value)



// 4. Destructuring dengan menggunakan rest operator
// Rest operator untuk mengambil sisa elemen
let array4 = [1, 2, 3, 4, 5];
let [firstNum, secondNum, ...restNums] = array4;
console.log(firstNum);  // 1
console.log(secondNum); // 2
console.log(restNums);  // [3, 4, 5]

// Rest operator untuk mengambil sisa property
let student = { id: 101, fullName: 'Eve', age: 20, major: 'Computer Science' };
let { id, fullName, ...restProps } = student;
console.log(id);        // 101
console.log(fullName);  // Eve
console.log(restProps); // { age: 20, major: 'Computer Science' }



// Bagian dari exercise 6 yang diubah dengan destructuring

// 1. let & const
function calculateAge(birthYear) {
    return 2019 - birthYear;
}
function yearUntilRetirement({ year, firstName }) {
    let age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}
yearUntilRetirement({ year: 1987, firstName: 'John' });


// 2. String Literal
let addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    return sum;
}
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// 3. Arrow Function
let phi = 3.14;
let radius = 0;
let calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);
radius = 21;
const area21 = calculateArea({ radius, power: 2 });
radius = 7;
const area7 = calculateArea({ radius, power: 2 });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


// 4. Default Parameter
let makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
}
makeAjaxRequest('www.google.com');