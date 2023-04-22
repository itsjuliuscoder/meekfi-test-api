const express = require('express');

const app = express(); 
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.send({
        statusCode: 200,
        message: "Welcome to MeekFi Test Application",
        description: "This is a test service infrastructure built to test the effectiveness of NodeJS Application!",
        version: "1.0.0"
    });
});

app.get('/api/name', (req, res) => {
    res.send({
        statusCode: 200,
        firstname: "Torty",
        lastname: "Mercy",
        age: "26",
        profession: "Profession",
        location: "Lagos"
    });
});


app.listen(process.env.PORT || 4000, () => {
    console.log("app is running now at Port: 4000");
});