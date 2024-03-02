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

// only for test
app.get('/', (req, res) => {
    pool.query(`
    SELECT * FROM film`, (err, result) => {
        if(err){
            res.status(500).json({message: "Internal server Error"});
            console.log(err);
        }
        else{
            res.send(result.rows);
        }
    })
})

app.listen(3000);