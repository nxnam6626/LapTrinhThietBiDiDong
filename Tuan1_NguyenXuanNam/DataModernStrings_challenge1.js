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
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4.0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//Tạo mảng cầu thủ cho mỗi đội
const players1 = game.players[0];
const players2 = game.players[1];

//Cầu thủ đầu tiên tong danh sách là thủ môn, những người khác là cầu thủ ở những vị trí khác
gk = players1[0];
fieldPlayers = players1.slice(1);
gk_team2 = players2[0];
fieldPlayers_team2 = players2.slice(1);

// Mảng chứa tất cả các cầu thủ 
const allPlayers = players1.concat(players2);

//Tạo mảng 'players1Final' gồm cầu thủ đội 1 và thêm 3 cầu thủ dự bị
const players1Final = players1.concat(['Thiago', 'Coutinho','Perisic']);
  
// 5. Tạo các biến `team1`, `draw`, `team2` cho mỗi tỷ lệ cược
const {team1, x: draw, team2} = game.odds;
  
  // 6. Hàm `printGoals`
const printGoals = (...players) => {
    let total = 0;
    for(const player of players){
        console.log(player);
        for(const scoregame of game.scored){
            if(scoregame == player)
                total += 1;
        }
    }
    console.log(total);
};
  
console.log("Write a function ('printGoals')");
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  
console.log("Call the function again with players from game.scored")
printGoals(game.scored);
  
  // 7. Xác định đội có khả năng thắng cao hơn
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
if(team1 < team2)
    console.log("Team 1 is more likely to win");
else if(team2 > team1)
    console.log("Team 2 is more likely to win");