// Array Exercise
let people = ["Greg", "Mary", "Devon", "James"];

// // No.1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// // No.2
people.forEach(person => {
    console.log(person);
  });

// No.3
people.shift();
console.log(people);

// No.4
people.splice(people.indexOf("James"), 1);
console.log(people);

// No.5
people.unshift("Matt");
console.log(people);

// No.6
people.push("Ricko");
console.log(people);

// No.7
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
      break;
    }
  }
  
// No.8
let filteredPeople = people.filter(person => person !== "Mary" && person !== "Matt");
console.log(filteredPeople);

// No.9
people.splice(2, 1);
people.splice(2, 0, "Elizabeth", "Artie");
console.log(people); 

// No.10
let withBob = people.concat("Bob");
console.log(withBob);