// Create an array 'bills' containing all 10 test bill values
// 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];

// . Create empty arrays for the tips and the totals ('tips' and 'totals')
const totals = [];
const tips = [];

// Create the 'calcTip' function
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total = bills[i] + tip;
    totals.push(total);
}
console.log("Totals: ", totals);


//Bonus: Create the 'calcTip' function
const calcAverage = (arr) => {
    sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

const averageTotal = calcAverage(totals);
console.log("Average Total: ", averageTotal);