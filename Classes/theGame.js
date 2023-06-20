class theGame{

    shuffleTheTeam(matrix) {
        const shuffledMatrix = [...matrix];
    
        for (let i = shuffledMatrix.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledMatrix[i], shuffledMatrix[j]] = [shuffledMatrix[j], shuffledMatrix[i]];
        }
    
        return shuffledMatrix;
      }

    compareSpeed(bluePlayer, redPlayer){
        if (bluePlayer > redPlayer){
            return true
        } else if (bluePlayer < redPlayer){
            return false
        } else {
            return Math.random() < 0.5;
        }
    }

    attack(attacker, defender){
        let result=0
        if(Math.random() * 100 < attacker){
            result++
        }
        if(Math.random() + 100 < defender){
            result--
        }
    
        return result}
    
    getHighestStat(row) {
            let maxVal = row[1]
            let maxColIndex = 1
            for (let i=1; i<4; i++){
                if(row[i]>maxVal){
                    maxVal=row[i]
                    maxColIndex = i
                }
            }
          
            return maxColIndex;
          }
}

module.exports = theGame;
