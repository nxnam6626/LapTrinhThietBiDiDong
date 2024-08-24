bill_values = [275, 40, 430]
bill_values.forEach(bill_value => {
    // if (bill_value >= 50 && bill_value <= 300)
    //     tip = bill_value * 15 / 100;
    // else
    //     tip = bill_value * 20 / 100;
    tip = bill_value >= 50 && bill_value <= 300 ? bill_value * 0.15 : bill_value * 0.2
    total_value = bill_value + tip;
    console.log(`The bill was ${bill_value}, the tip was ${tip.toFixed(2)}, and the total value ${total_value}`)
});
