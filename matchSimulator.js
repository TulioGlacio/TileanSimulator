const teamAssembler = require('./Classes/teamAssembler');
const theGame = require('./Classes/theGame')
const logHelper = require('./Classes/logHelp');

const team = new teamAssembler('Players');
const game = new theGame();
const logHelp = new logHelper();

let roundScore = 0;
let blueScore = 0;
let redScore = 0;

// Specify the team name to retrieve player information
const blueTeamName = 'Luccini Pięknotki';
const redTeamName = 'Luccini Pogoń';

// Get players by team and create matrix
const bluePlayers = team.getPlayersByTeam(blueTeamName);
const blueTeam = team.createPlayerMatrix(bluePlayers);

const redPlayers = team.getPlayersByTeam(redTeamName);
const redTeam = team.createPlayerMatrix(redPlayers);

if(blueTeam.length != 5 || redTeam.length != 5){
    throw new Error("Wrong number of players"); 
}

// Log the player matrix
console.log(blueTeamName + ':');
console.log('--------------------------------------');
console.log('Name\t\tFighting\tShooting\tAgility\t\tSpeed');
console.log('--------------------------------------');
blueTeam.forEach(row => {
  console.log(row.join('\t\t'));
console.log ();
});
console.log ();

console.log(redTeamName + ':');
console.log('--------------------------------------');
console.log('Name\t\tFighting\tShooting\tAgility\t\tSpeed');
console.log('--------------------------------------');
redTeam.forEach(row => {
  console.log(row.join('\t\t'));
  console.log ();
});

for (let i=0; i<100; i++){

    console.log('Round:' + i)
    console.log()
    //Shuffle players
     game.shuffleTheTeam(blueTeam);
     game.shuffleTheTeam(redTeam);
    for(let j=0; j<5; j++){
    if(game.compareSpeed(blueTeam[j][5], redTeam[j][5]) == true){
        let stat = game.getHighestStat(blueTeam[j])
        
        console.log('Advance ' + blueTeamName + ' ' + blueTeam[j][0] + ' '+ logHelp.getStatName(stat))

        roundScore = roundScore + game.attack(blueTeam[j][stat],redTeam[j][stat])
        }
    else{
        let stat = game.getHighestStat(redTeam[j])

        console.log('Advance ' + redTeamName + ' ' + redTeam[j][0] + ' ' + logHelp.getStatName(stat))

        roundScore = roundScore - game.attack(redTeam[j][stat],blueTeam[j][stat])
        }
    }

    if (roundScore >= 5){
        blueScore++
        roundScore = 0
    }
    else if (roundScore <= -5){
        redScore++
        roundScore = 0
    }

    if (blueScore + redScore == 3){
        console.log(blueTeamName + ' ' + blueScore + ' : ' + redScore + ' ' + redTeamName)
        throw new Error('Match is over')
    }

    console.log('roundScore:' + roundScore)
    console.log('redscore:' + redScore)
    console.log('bluescore:' + blueScore)
    console.log()
}

