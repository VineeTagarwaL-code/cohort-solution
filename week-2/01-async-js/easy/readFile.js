const fs = require('fs');

const filePath = 'week-2/01-async-js/easy/vineet.txt';

fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  
  console.log('File content:', data);
});
