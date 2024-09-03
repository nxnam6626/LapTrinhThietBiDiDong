const calcAverageHumanAge = ages =>
    ages
        .map(age => (age <= 2 ? age * 2 : 16 + age * 4)) // Chuyển đổi tuổi chó thành tuổi người
        .filter(humanAge => humanAge >= 18) // Lọc các tuổi người từ 18 trở lên
        .reduce((accumulator, age) => accumulator + age, 0) // Tính tổng tuổi người
        / ages.filter(age => (age <= 2 ? age * 2 : 16 + age * 4) >= 18).length; // Tính số lượng chó đủ tuổi người


const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
