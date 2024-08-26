calcAverage = (a, b, c) => (a + b + c) / 3

checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
    else{
        console.log('No team wins!');
    }
}

//Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

//Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);