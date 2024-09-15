const express = require('express');

const router = express.Router();

const { MongoClient } = require('mongodb');
// Connection URL
const bdd_username = process.env.MONGODB_USERNAME || 'root';
const bdd_password = process.env.MONGODB_PASSWORD || 'example';
const bdd_hostname = process.env.MONGODB_HOSTNAME || 'localhost';
const bdd_port = process.env.MONGODB_PORT || '27017';
// Database Name
const dbName = process.env.MONGODB_DB_NAME || 'app';
const url = `mongodb://${bdd_username}:${bdd_password}@${bdd_hostname}:${bdd_port}`;
const client = new MongoClient(url);


/* GET users listing. */
router.get('/albums', async function (req, res, next) {
// Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = await db.collection('albums').find({}).toArray()
  res.send(collection).status(200);

});

module.exports = router;
