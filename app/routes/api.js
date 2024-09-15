const express = require('express');

const router = express.Router();

const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://root:example@localhost:27017';
const client = new MongoClient(url);
// Database Name
const dbName = 'app';


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
