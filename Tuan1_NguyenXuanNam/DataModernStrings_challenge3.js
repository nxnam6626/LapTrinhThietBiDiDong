const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
    ]
);

//Task 1
console.log("Task 1");

const events = [];
for(let event of gameEvents){
    if(!events.includes(event[1]))
        events.push(event[1]);
}

console.log(events);

//Task 2
console.log("Task 2");

gameEvents.delete(64);
console.log(gameEvents);

//Task 3
console.log('Task 3');
const gameDuration = 90; // Total minutes in a regular game
const averageEventTime = gameDuration / gameEvents.size;
console.log(`An event happened, on average, every ${averageEventTime.toFixed(2)} minutes`);

//Task 4
console.log('Task 4');

for(const [minute, event] of gameEvents){
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
}