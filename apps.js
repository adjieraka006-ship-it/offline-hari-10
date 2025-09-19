const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    // res.send('Hello Wolrd')
    // res.json({
    //     nama : 'ade'
    //     email : 'aa@gmail.com'
    //     noHp : '0812313'
    // });
    res.sendFile('./index.html',{root: __dirname});
});
app.get('/about', (req, res) => {
    res.sendFile('./about.html',{root: __dirname});
    //res.send('Halaman About!')
});
app.get('/contact', (req, res) => {
    res.sendFile('./contac.html',{root: __dirname});
    //res.send('Halaman Contact!')
});
app.get('/produck/:id', (req, res)=>{
res.send(`product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`);
});
app.use('/', (req, res)=>{
    res.status(404);
    res.send('<h1>Test<h1>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});