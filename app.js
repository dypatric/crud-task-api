const express = require('express');
const app = express();

const mongoose = require('./database/mongoose')

app.listen(3000, ()=> {
    console.log("Server started at port on 3000")
});
