const express = require('express');
const path = require('path');
const app = express();
app.set("views", path.join(__dirname, "/src/views"));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
});

app.get('/', (req, res) => {
    res.render('marcacao', {numeroRota: 1});
});

app.get('/a', (req, res) => {
    res.render('marcacao', {numeroRota: 2});
});

app.get('/b', (req, res) => {
    res.render('marcacao', {numeroRota: 3});
});