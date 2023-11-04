const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '..', 'src', 'assets', 'articles');
const outputFilePath = path.join(__dirname, '..', 'src', 'assets', 'all_articles.json');

// Asynchronously read the 'articles' directory
fs.readdir(articlesDir, (err, files) => {
  if (err) {
    console.error('Error reading the articles directory:', err);
    return;
  }

  const articles = [];

  // Filter JSON files
  let jsonFiles = files.filter(file => file.endsWith('.json'));

  let filesProcessed = 0;

  jsonFiles.forEach(file => {
    const filePath = path.join(articlesDir, file);

    // Asynchronously read each article JSON file
    fs.readFile(filePath, 'utf8', (err, content) => {
      filesProcessed++;

      if (err) {
        console.error(`Error reading the file: ${filePath}`, err);
      } else {
        try {
          // Parse content to JSON
          const article = JSON.parse(content);
          // Push the required properties to the 'articles' array
          articles.push({
            id: article.id,
            title: article.title,
            description: article.description,
            image: article.image,
          });
        } catch (parseErr) {
          console.error(`Error parsing JSON from file: ${filePath}`, parseErr);
        }
      }

      // Once all files are processed, write the output JSON file
      if (filesProcessed === jsonFiles.length) {
        fs.writeFile(outputFilePath, JSON.stringify(articles, null, 2), 'utf8', (err) => {
          if (err) {
            console.error('Error writing all_articles.json:', err);
          } else {
            console.log('all_articles.json has been successfully created!');
          }
        });
      }
    });
  });
});
