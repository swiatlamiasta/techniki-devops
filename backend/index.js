const keys = require('./keys');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log(keys);

const redis = require('redis');
const redisClient = redis.createClient({
    host: keys.redistHost,
    port: keys.redistPort,
    retry_strategy: () => 1000
});

const { Pool } = require('pg');

const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

pgClient.on('error', () => console.log('Cannot connect to the database'));

pgClient.query('CREATE TABLE IF NOT EXISTS values (number INT)').catch(err => console.log(err));

const port = 5000;

app.get('/', (req, res)=>{
    res.send('Hello from backend \n');
});

app.listen(port, err => {
    console.log(`Backend app listening on port ${port}`);
});