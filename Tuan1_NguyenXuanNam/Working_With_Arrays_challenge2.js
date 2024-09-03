function calcAverageHumanAge(ages) {

    const humanAges = ages.map(age => {
        if (age <= 2) {
            return age * 2;
        } else {
            return 16 + age * 4;
        }
    });

    const adults = humanAges.filter(age => age >= 18);

    const totalAge = adults.reduce((accumulator, age) => {
        return accumulator + age;
    }, 0);


    const averageAge = totalAge / adults.length;

    return averageAge;
}

// Dữ liệu thử nghiệm
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];


console.log(calcAverageHumanAge(data1)); 
console.log(calcAverageHumanAge(data2));
