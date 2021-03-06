const express = require('express');
const app = express();

const {v4: uuidv4} = require('uuid');

const appId = uuidv4();

const port = 5000;

app.get('/', (req, resp)=>{
    resp.send(`${appId} hello from my backend`);
});

const redis = require('redis');
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    retry_strategy: () => 1000
});

app.listen(port, err =>{
    console.log(`Listening on port ${port}`);
})