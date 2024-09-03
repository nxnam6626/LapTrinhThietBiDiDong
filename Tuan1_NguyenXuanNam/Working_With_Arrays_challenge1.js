function checkDogs(dogsJulia, dogsKate) {
    const correctedJulia = dogsJulia.slice();
    correctedJulia.splice(0, 1);
    correctedJulia.splice(-2);


    const allDogs = correctedJulia.concat(dogsKate);


    allDogs.forEach((age, index) => {
        const dogNumber = index + 1;
        if (age >= 3) {
            console.log(`Dog number ${dogNumber} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${dogNumber} is still a puppy`);
        }
    });
}

// Test data
const data1Julia = [3, 5, 2, 12, 7];
const data1Kate = [4, 1, 15, 8, 3];
const data2Julia = [9, 16, 6, 8, 3];
const data2Kate = [10, 5, 6, 1, 4];

// Chạy hàm với dữ liệu thử nghiệm
checkDogs(data1Julia, data1Kate);
checkDogs(data2Julia, data2Kate);
