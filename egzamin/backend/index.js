const keys = require('./keys');
const express = require("express");
const bodyParser = require("body-parser");

const redis = require("redis");
const cors = require("cors");
const { Pool } = require('pg');
const app = express();

app.use(cors());
app.use(bodyParser.json());
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: 6379
});
console.log(keys);

const pgClient = new Pool({
    host: keys.pgHost,
    port: keys.pgPort,
    user: keys.pgUser,
    password: keys.pgPassword,
    database: keys.pgDatabase
  });

pgClient.on('error', () => console.log('Lost PG conn'));

pgClient
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err => console.log("create", err));

app.get('/val', (req, res) => {
    pgClient
        .query('SELECT * FROM values')
        .then(resp => res.send(resp.rows))
        .catch(e => console.error(e.stack))
})


app.get('/incometax', (req, res) => {
    const income = parseFloat(req.query.income);
    const type = req.query.type;
    if (isNaN(income)){
        res.status(400);
        res.send("Error, must be a number")
        return
    }

    const key = `${income}_${type}`;
    redisClient.get(key, (err, value) => {
        if (value != null){
            res.send({'value': value});
        } else {
            if (type == 'firstthreshold') {
                var tax =  income*0.18;
            } 
            pgClient
                .query(`INSERT INTO values (number) VALUES (${tax})`)
                .catch(err => console.log(err));
            res.send({'value': tax});
            client.set(key, tax);
        }
    });
});


app.listen(keys.port, ()=>{
    console.log("Backend started");
})
