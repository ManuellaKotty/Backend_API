
const http = require ('node:http');

const server = http.createServer ( function (req, res) {
    // A l'arrivée d'une requête
    console.log ("Server running at http://127.0.0.1:3000/");
    res.write ("<center><h1>Bienvenue sur le serveur de MamanManue !</h1></center>");
    res.end ();
});

// Lancer le serveur (en écoute au port 8081)
server.listen(3000);


// Let's test FileReadSync
const fs = require('fs');
const textIn = fs.readFileSync('input.txt', 'utf-8');
console.log(textIn);

const textOut = 'Ecriture de fichier.'
fs.writeFileSync('output.txt', textOut);