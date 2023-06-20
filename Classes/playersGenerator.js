const fs = require('fs');

class playersGenerator{
    generatePlayerJSON(team, maxBig, maxSmall) {
        const name = this.getRandomName()
        const player = {
          team: team,
          name: name,
          fightingSkills: this.getRandomNumber(11, maxBig),
          shootingSkills: this.getRandomNumber(11, maxBig),
          agility: this.getRandomNumber(11, maxBig),
          speed: this.getRandomNumber(1, maxSmall)
        };
      
        const filePath = 'Players/' + team + '-' +name +'.json'
        const jsonData = JSON.stringify(player, null, 2);
      
        fs.writeFileSync(filePath, jsonData);
        console.log('Player JSON file saved');
      }

      getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      getRandomName() {
        const italianFirstNames = [
          "Mario",
          "Luigi",
          "Giovanni",
          "Francesco",
          "Antonio",
          "Roberto",
          "Paolo",
          "Giuseppe",
          "Marco",
          "Angelo",
          "Riccardo",
          "Stefano",
          "Andrea",
          "Simone",
          "Michele",
          "Alessandro",
          "Fabio",
          "Davide",
          "Alberto",
          "Lorenzo",
          "Diego",
          "Enrico",
          "Massimo",
          "Gabriele",
          "Giacomo",
          "Claudio",
          "Sergio",
          "Vincenzo",
          "Renato",
          "Bruno"
        ];
      
        const italianLastNames = [
          "Rossi",
          "Russo",
          "Ferrari",
          "Esposito",
          "Bianchi",
          "Romano",
          "Colombo",
          "Ricci",
          "Marino",
          "Greco",
          "Gallo",
          "Conti",
          "De Luca",
          "Mancini",
          "Costa",
          "Giordano",
          "Rizzo",
          "Lombardi",
          "Moretti",
          "Barbieri",
          "Fontana",
          "Santoro",
          "Mariani",
          "Rinaldi",
          "Caruso",
          "Ferrara",
          "Galli",
          "Martini",
          "Leone",
          "Longo"
        ];
      
        const randomFirstNameIndex = Math.floor(Math.random() * italianFirstNames.length);
        const randomLastNameIndex = Math.floor(Math.random() * italianLastNames.length);
        const randomFirstName = italianFirstNames[randomFirstNameIndex];
        const randomLastName = italianLastNames[randomLastNameIndex];
      
        return `${randomFirstName} ${randomLastName}`;
      }
}module.exports = playersGenerator;