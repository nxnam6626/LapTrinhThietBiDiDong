calcTip = bill => {
    if(bill >= 50 && bill <= 300)
        return bill * 0.15;
    else
        return bill * 0.2;
}

bills = [125, 555, 44];
tips = bills.map(calcTip);
total = bills.map((bill, index) => bill + tips[index]);

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);