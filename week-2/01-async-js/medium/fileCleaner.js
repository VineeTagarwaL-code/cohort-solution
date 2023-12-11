let fs = require('fs')
let s1= "" ;



const filePath = 'week-2/01-async-js/medium/vineet.txt';


    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }
        
        const cleanedData = data.replace(/\s+/g, ' ');
        fs.writeFile(filePath, cleanedData, 'utf8', function (err) {
          if (err) {
            console.error('Error writing to file:', err);
            return;
          }
          console.log('File has been cleaned and updated successfully.');
        });
      });

