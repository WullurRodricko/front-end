// Exercise #6

// 1. let & const
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

function yearUntilRetirement(object) {
    const age = calculateAge(object.year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(object.firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(object.firstName + ' is already retired.');
    }
}

yearUntilRetirement({ year: 1987, firstName: 'John' });


// 2. String Literal
const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    return sum;
}

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// 3. Arrow Function

const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. Default Parameter
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
}

makeAjaxRequest('www.google.com');