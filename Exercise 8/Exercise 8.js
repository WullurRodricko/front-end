// main.js
import { yearUntilRetirement } from './yearUntilRetirement.js';
import { addNumber } from './addNumber.js';
import { calculateArea } from './calculateArea.js';
import { makeAjaxRequest } from './ajaxRequest.js';


yearUntilRetirement({ year: 1987, firstName: 'John' });


console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });
console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


makeAjaxRequest('www.google.com');
