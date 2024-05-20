require('dotenv').config()
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello this is adrak wali chai with backend!</h1>')
})

app.listen(process.env.PORT, () => {
    console.log("Server is running");
})


