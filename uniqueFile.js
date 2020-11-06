const fs = require('fs');
const path = require('path');
const id = Math.floor(Math.random() * 1000);

const rename = () => {
  for (let i = 1000; i <= 1000; i++) {
    fs.rename(
      path.join(__dirname, '/files', 'your_file_here.csv'), // original file goes here
      path.join(__dirname, '/files', `your_file_here-${id}.csv`), // new file with id variable goes here
      (e) => {
        if (e) throw e;
        console.log('File Renamed 😀');
      }
    );
  }
};

const renameOtherFile = () => {
  for (let i = 1000; i <= 1000; i++) {
    fs.rename(
      path.join(__dirname, '/files', 'other_file.csv'), // original file goes here
      path.join(__dirname, '/files', `other_file-${id}.csv`), // new file with id variable goes here
      (e) => {
        if (e) throw e;
        console.log('File Renamed 😀');
      }
    );
  }
};

rename();
renameOtherFile();
