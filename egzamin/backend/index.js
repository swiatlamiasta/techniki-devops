const keys = require('./keys');
const express = require("express");
const bodyParser = require("body-parser");

const redis = require("redis");
const cors = require("cors");
const { Pool } = require('pg');
const app = express();

app.use(cors());
app.use(bodyParser.json());
const client = redis.createClient({
    host: keys.redisHost,
    port: 6379
});
console.log(keys);
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

pgClient.on('error', () => console.log('Lost PG conn'));

pgClient
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err => console.log("create", err));

function gcd(a,b){ return b?gcd(b,a%b):a }

app.get('/val', (req, res) => {
    pgClient
        .query('SELECT * FROM values')
        .then(resp => res.send(resp.rows))
        .catch(e => console.error(e.stack))
})

app.get('/gcd', (req, res) => {
    const sortedNums = [req.query.number1, req.query.number2].sort();
    const key = sortedNums.join();
    client.get(key, (err, gcd_value) => {
        if (gcd_value != null){
            res.send(`Cached gcd(${key}): ${gcd_value}`);
        } else {
            const gcd = gcd(sortedNums[0], sortedNums[1]);
            pgClient
                .query(`INSERT INTO values (number) VALUES (${gcd})`)
                .catch(err => console.log(err));
            res.send(`gcd(${key}): ${gcd}`);
            client.set(key, gcd);
        }
    });
});

app.get('/incometax', (req, res) => {
    const income = parseFloat(req.query.income);
    const type = req.query.type;
    if (!(['firstthreshold'].includes(type))){
        res.status(400);
        res.send("Bad type. Accepted type: 'firstthreshold'")
        return
    }
    if (isNaN(income)){
        res.status(400);
        res.send("Error, must be a number")
        return
    }

    const key = `${income}_${type}`;
    client.get(key, (err, value) => {
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


app.listen(5000, ()=>{
    console.log("Listening on port 5000");
})
