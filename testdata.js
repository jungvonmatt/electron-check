const fs = require('fs');
let writeStream = fs.createWriteStream('supersize.txt');

// create 5.7 GB of data
for (i=0; i<=24000000; i++) {
    writeStream.write('❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️', 'utf8');
}   
writeStream.on('finish', () => {
    console.log('From Hamburg with ❤️');
});
writeStream.end();