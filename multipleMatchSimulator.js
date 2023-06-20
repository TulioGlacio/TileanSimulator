
const teamAssembler = require('./Classes/teamAssembler');
const theGame = require('./Classes/theGame')
const logHelper = require('./Classes/logHelp');
const fs = require('fs');
const { match } = require('assert');


const team = new teamAssembler('Players');
const game = new theGame();
const logHelp = new logHelper();

const teamNamesALL = [
    'Komediant Luccini',
    'Pogoń Luccini',
    'Pięknotki Luccini',
    'Szczurołap Miragliano',
    'Gondolier Miragliano',
    'Kanalarz Miragliano',
    'Alchemik Pavona',
    'Akademik Pavona',
    'Gladiator Pavona',
    'Speditore Pavona',
    'Kamieniarz Remas',
    'Remański Klub Sportowy',
    'Gwardzista Remas',
    'Syrenki Tobaro',
    'Doker Tobaro',
    'Elegant Tobaro',
    'Złotnik Trantio',
    'Tarczownik Trantio',
    'Niszczyciele Trantio',
    'Romantyk Verezzo',
    'Piekarze i Szynkarze Verezzo',
    'Nieruchomości i Remonty Adazzio Spedaturra Verezzo'

]

const firstLeague = [
    'Gondolier Miragliano',
    'Kamieniarz Remas',
    'Nieruchomości i Remonty Adazzio Spedaturra Verezzo',
    'Syrenki Tobaro',
    'Piekarze i Szynkarze Verezzo',
    'Złotnik Trantio',
    'Komediant Luccini',
    'Pięknotki Luccini'
]

const secondLeague = [
    'Tarczownik Trantio',
    'Gwardzista Remas',
    'Elegant Tobaro',
    'Speditore Pavona',
    'Kanalarz Miragliano',
    'Romantyk Verezzo',
    'Gladiator Pavona',
    'Doker Tobaro'
]

const thirdLeague = [
    'Szczurołap Miragliano',
    'Niszczyciele Trantio',
    'Remański Klub Sportowy',
    'Pogoń Luccini',
    'Alchemik Pavona',
    'Akademik Pavona'
]

const Matches = team.randomPairArray(thirdLeague)
 console.log(Matches)


for (let index=0; index < Matches.length ;index++)
  {
let roundScore = 0;
let blueScore = 0;
let redScore = 0;

// Specify the team name to retrieve player information
const blueTeamName = Matches[index][0];
const redTeamName = Matches[index][1];

// Get players by team and create matrix
const bluePlayers = team.getPlayersByTeam(blueTeamName);
const blueTeam = team.createPlayerMatrix(bluePlayers);

const redPlayers = team.getPlayersByTeam(redTeamName);
const redTeam = team.createPlayerMatrix(redPlayers);

if(blueTeam.length != 5 || redTeam.length != 5){
    throw new Error("Wrong number of players"); 
}

for (let i=0; i<100; i++){
    //Shuffle players
     game.shuffleTheTeam(blueTeam);
     game.shuffleTheTeam(redTeam);
    for(let j=0; j<5; j++){
    if(game.compareSpeed(blueTeam[j][5], redTeam[j][5]) == true){
        let stat = game.getHighestStat(blueTeam[j])
        roundScore = roundScore + game.attack(blueTeam[j][stat],redTeam[j][stat])
        }
    else{
        let stat = game.getHighestStat(redTeam[j])
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

    if (blueScore + redScore == 3) {
        const score = blueScore.toString() + ' : ' + redScore.toString()
        const csvData = blueTeamName + ',' + redTeamName + ',' + score + ',' + logHelp.givePoints(blueScore,redScore)+ ','+ logHelp.givePoints(redScore,blueScore) + '\n';
      
        fs.appendFile('MatchResults - 3liga.csv', csvData, (err) => {
          if (err) {
            console.error('Error appending to CSV file:', err);
          } else {
            console.log('Data appended to CSV file successfully.');
          }
        });
      
        break;
      }
}
}