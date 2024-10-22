// IIFE untuk menghitung BMI
(function() {
    // Fungsi untuk menghitung BMI
    function calculateBMI(weight, height, callback) {
        if (weight <= 0 || height <= 0) {
            console.error("Berat dan tinggi anda harus lebih dari 0.");
            return;
        }

        const bmi = weight / (height * height);

        if (callback) {
            callback(bmi);
       
        }
    }

    function displayBMI(bmi) {
        console.log("BMI anda adalah: " + bmi.toFixed(2));
        
        if (bmi < 18.5) {
            console.log("Berat anda underweight.");
        } else if (bmi < 24.9) {
            console.log("Berat anda Normal.");
        } else if (bmi < 29.9) {
            console.log("Berat anda overweight.");
        } else {
            console.log("Anda obesitas.");
        }
    }

    // Input dari user
    const weight = parseFloat(prompt("Masukkan berat anda dalam kilogram:"));
    const height = parseFloat(prompt("Masukkan tinggi anda dalam meter:"));

    calculateBMI(weight, height, displayBMI);
})();