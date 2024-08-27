mark = {
    fullName: 'Mark Miller',
    mass:78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height**2);
        return this.bmi;
    }
};

john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height**2);
        return this.bmi
    }
}

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} BMI (${john.bmi})`);
}
else if(mark.bmi < john.bmi){
    console.log(`${mark.fullName} BMI (${mark.bmi}) is lower than ${john.fullName} BMI (${john.bmi})`);
}
else{
    console.log(`${mark.fullName} and ${mark.fullName} have the same BMI (${mark.bmi})`);
}