const fs = require('fs');

class teamAssembler {
  constructor(folderPath) {
    this.folderPath = folderPath;
  }
  
getPlayersByTeam(teamName) {
    const files = fs.readdirSync(this.folderPath);

    const players = [];

    files.forEach(file => {
      const filePath = `${this.folderPath}/${file}`;
      const playerData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      if (playerData.team === teamName) {
        players.push(playerData);
      }
    });

    return players;
  }

  createPlayerMatrix(players) {
    const matrix = players.map(player => {
      const row = [
        player.name,
        player.fightingSkills,
        player.shootingSkills,
        player.agility,
        player.speed
      ];
  
      // Check if the row length is exactly 5
      if (row.length !== 5) {
        console.log(`Error: Invalid row length in player matrix. Expected 5 elements, but got ${row.length}.`);
      }
  
      return row;
    });
  
    return matrix;
  }

  randomPairArray(arr) {
    // Copy the input array to avoid modifying the original
    const shuffledArray = [...arr];
  
    // Shuffle the array randomly
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    // Create pairs from the shuffled array
    const pairs = [];
    for (let i = 0; i < shuffledArray.length; i += 2) {
      if (i + 1 < shuffledArray.length) {
        pairs.push([shuffledArray[i], shuffledArray[i + 1]]);
      } else {
        // If the array length is odd, push the last element as a pair with null
        pairs.push([shuffledArray[i], null]);
      }
    }
  
    return pairs;
  }
}

module.exports = teamAssembler;