const express = require('express');
const app = express();

app.get('/:x/:y', (req, res) => {
    let x = req.params.x;
    let y = req.params.y;
    let sum = parseInt(x)+parseInt(y);
    res.send(sum.toString());
});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});