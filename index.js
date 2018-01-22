const express = require('express');
const mid = require('./middleware');

let app = express();

app.use(mid('James'));

app.get('/', (request, response) => {
    response.send(`Hello ${request.user.name}`);
});

app.listen(3000);