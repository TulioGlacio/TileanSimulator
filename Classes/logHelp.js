class logHelper{
    getStatName(column){
        switch(column){
            case 1:
                return 'Fighting skill'
            case 2:
                return 'Shooting skill'
            case 3:
                return 'Agility'    
        }

    }

    givePoints(score1, score2){
        if(score1 - score2 > 0){
            return 2
        }else if (score1 - score2 == -1){
            return 0
        }else{
            return -1
        }
    }
}

module.exports = logHelper;