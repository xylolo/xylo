const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/create-html', (req, res) => {
    const { fileName, fileDescription } = req.body;

    // Create HTML content
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${fileName}</title>
    </head>
    <body>

        <h1>${fileName}</h1>

        <p>${fileDescription}</p>

    </body>
    </html>
    `;

    // Write HTML content to a file
    const filePath = `bio/${fileName}.html`;
    fs.writeFile(filePath, htmlContent, (err) => {
        if (err) {
            console.error('Error creating HTML file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log(`HTML file (${filePath}) created successfully.`);
            res.json({ success: true });
        }
    });
});

