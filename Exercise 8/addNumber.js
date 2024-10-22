export const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    return sum;
};
