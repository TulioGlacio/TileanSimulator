const playersGenerator = require('./Classes/playersGenerator')

const generator = new playersGenerator

const teamNames = [
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


for(let j=0; j<teamNames.length; j++)
{

    for(let i=0; i<5; i++)
        {
        let bigMax = generator.getRandomNumber(11,100)
        let smallMax = generator.getRandomNumber(1,10)
        generator.generatePlayerJSON(teamNames[j],bigMax, smallMax)
    }
}