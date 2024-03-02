const express = require('express')
const pool = require('./db_config/db_config.js');
const router = require("./router/index.js")
const app = express();

app.use(router);

pool.connect((err, res) => {
    if(err){
        console.log("can't connect to db");
    }
    else{
        console.log("db connected");
    }
})

// app.get('/', (req, res) => {
//     res.send("321");
// })

app.listen(3000);