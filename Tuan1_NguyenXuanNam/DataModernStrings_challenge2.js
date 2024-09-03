const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};

// Task 1
console.log('Task 1');

game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
});

//Task 2
console.log('Task 2');

let odds = Object.values(game.odds);
let totalOdds = 0;
for(let odd of odds){
    totalOdds += odd;
}
let averageOdds = totalOdds/ odds.length;
console.log(averageOdds);

//Task 3
console.log('Task 3');

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}
Odd of draw: ${game.odds.x}
Odd of victory ${game.team2}: ${game.odds.team2}`)

//Task 4
console.log('Task 4');
const scorers = {};
for(let sco of game.scored){
    scorers[sco] = 0;
}

for(let sco of game.scored){
    scorers[sco] += 1;
}

console.log(scorers)

// const scorers = {
//     'Lewandowski': 2,
//     'Gnarby': 1,
//     'Hummels': 1
// }