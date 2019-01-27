const express = require('express');
const app = express();
let name;



app.get('/name/set/:imie', (req, res) => {
    name = req.params.imie;
    res.send(name);
});

app.get('/name/show', (req, res) => {
    res.send(name);
});

app.get('/name/check', (req, res) => {
    if (name !== undefined) {
    res.send("Imię zostało zapisane w programie") } else {
        res.send("Imię nie zostało zapisane w programie")
    }
});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});