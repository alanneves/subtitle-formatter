const lineReader = require('line-reader');
const fs = require('fs');

const OLD_FILE_PATH = '';
const NEW_FILE_PATH = '';

lineReader.eachLine(OLD_FILE_PATH, function(line) {
  if((isNaN(line) && line.substr(0,3) !== "00:") || line == "")
    fs.appendFile(NEW_FILE_PATH, `${line}\n`, function (err) {
      if (err) return console.log(err);
    });
});