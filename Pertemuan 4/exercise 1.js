function BMI(beratbadan, tinggibadan) {
    if (tinggibadan <= 0) {
        throw new Error('Tinggi badan harus lebih besar dari 0.');
    }
    if (beratbadan <= 0) {
        throw new Error('Berat badan harus lebih besar dari 0.');
    }
    const bmi = beratbadan / (tinggibadan * tinggibadan);
    return bmi;
}


const beratbadan = 70;
const tinggibadan = 1.75; 

const bmi = BMI(beratbadan, tinggibadan);
console.log(`BMI Anda adalah: ${bmi.toFixed(2)}`);