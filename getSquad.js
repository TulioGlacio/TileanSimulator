const teamAssembler = require("./Classes/teamAssembler");

const squad = new teamAssembler('Players');

const teamName = 'Komediant Luccini'
const teamPlayers = squad.getPlayersByTeam(teamName)
const team = squad.createPlayerMatrix(teamPlayers)

console.log(team)