let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// No.1
programming.languages.push("Go");
console.log(programming.languages);

// No.2
programming["difficulty"] = 7;
console.log(programming.difficulty);

// No.3
delete programming.jokes;
console.log(programming);

// No.4
programming.isFun = true;
console.log(programming);

// No.5
const updatedLanguages = programming.languages.map((language, index) => `${index} - ${language}`);
console.log(updatedLanguages);
