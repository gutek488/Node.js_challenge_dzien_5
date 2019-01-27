const express = require('express');
const app = express();
let yes = 0;
let no = 0;
let maybe = 0;

app.use(express.static('./public/zadanieDnia/'));



app.get('/vote/:option', (req, res) => {
    switch (req.params.option) {
        case "yes":
            yes++;
            break;
        case "no":
            no++;
            break;
        case "maybe":
            maybe++;
            break;
        default:
            res.send("Vote yes, no, or maybe!")
    }
    res.send(`Thanks for voting for ${req.params.option}!`);

});



app.get('/votes/check', (req, res) => {

    res.send(`yes: ${yes}<br>no: ${no}<br>maybe: ${maybe}`)




});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});