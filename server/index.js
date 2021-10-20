const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('/', (req, res, next) => {

    // console.log(req);

    // res.write('<html><head><title>NodeJs</title></head><body>');

    // res.write(`
    //         <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //         <div class="container-md">
    //         <a class="navbar-brand" href="#">Hello World!</a>
    //         <button class="btn btn-outline-success" id="btn">Click here</button>
    //         </div>
    //     </nav>

    // `);

    // res.write('</body></html>');

    // res.end();

    res.sendFile('index.html')
}); 


app.get('/api', (req, res, next) => {
    const data = {
        firstName: 'Sathish',
        lastName: 'Thangaraj'
    };

    res.json(data);
})

app.listen(4000, () => {
    console.log('Server started')
});