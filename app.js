const express = require('express');
const app = express();
let puerto = 3030;
const path = require('path');

app.use(express.static('public'));

app.get('', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));

app.listen(puerto, () => console.log('Servidor corriendo en http://localhost:' + puerto));