//data1
mark_mass_data1 = 78;
mark_height_data1 = 1.69;
john_mass_data1 = 92;
john_height_data1 = 1.95;
//bmi1
mark_bmi1 = mark_mass_data1 / mark_height_data1 ** 2;
john_bmi1 = john_mass_data1 / john_height_data1 ** 2;

markHigherBMI1 = mark_bmi1 > john_bmi1

console.log("Test Data 1:");
console.log("Mark's BMI:" + mark_bmi1);
console.log("John's BMI:" + john_bmi1);
console.log("BMI của Mark cao hơn của John là:" + markHigherBMI1);

mark_mass_data2 = 95;
mark_height_data2 = 1.88;
john_mass_data2 = 85;
john_height_data2 = 1.76;
//bmi2
mark_bmi2 = mark_mass_data2 / mark_height_data2 ** 2;
john_bmi2 = john_mass_data2 / john_height_data2 ** 2;

markHigherBMI2 = mark_bmi2 > john_bmi2;

console.log("Test Data 2:");
console.log("Mark's BMI:" + mark_bmi2);
console.log("John's BMI:" + john_bmi2);
console.log("BMI của Mark cao hơn của John là:" + markHigherBMI2);