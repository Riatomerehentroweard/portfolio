const fs = require('fs');
const path = require('path');

// Define the source and destination files
const sourceFile = path.join(__dirname, '..', 'src', '404.html');
const destinationDir = path.join(__dirname, '..', 'dist', 'my-portfolio');
const destinationFile = path.join(destinationDir, '404.html');

// Ensure the destination directory exists, create it if it doesn't
fs.mkdirSync(destinationDir, {recursive: true});

// Copy the file
fs.copyFileSync(sourceFile, destinationFile);

console.log(`File copied from ${sourceFile} to ${destinationFile}`);
