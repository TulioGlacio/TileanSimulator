const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const folderPath = 'Players'; // Replace with the actual path to your JSON files folder
const csvFilePath = 'players.csv'; // The path where the CSV file will be created

function readJsonFilesFromFolder(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const jsonFiles = files.filter(file => file.endsWith('.json'));
      resolve(jsonFiles);
    });
  });
}

function parseJsonFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      try {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    });
  });
}

function convertJsonToCsv(jsonFiles) {
  const csvWriter = createCsvWriter({
    path: csvFilePath,
    header: ['team', 'name', 'fightingSkills', 'shootingSkills', 'agility', 'speed']
  });

  const records = [];

  return new Promise((resolve, reject) => {
    let completedFiles = 0;

    jsonFiles.forEach(file => {
      const filePath = `${folderPath}/${file}`;
      parseJsonFile(filePath)
        .then(jsonData => {
          const { team, name, fightingSkills, shootingSkills, agility, speed } = jsonData;
          records.push({ team, name, fightingSkills, shootingSkills, agility, speed });

          completedFiles++;
          if (completedFiles === jsonFiles.length) {
            resolve(records);
          }
        })
        .catch(error => reject(error));
    });
  })
  .then(records => csvWriter.writeRecords(records))
  .then(() => console.log('CSV file created successfully'))
  .catch(error => console.error('Error:', error));
}

readJsonFilesFromFolder(folderPath)
  .then(jsonFiles => convertJsonToCsv(jsonFiles))
  .catch(error => console.error('Error:', error));