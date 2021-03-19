const express = require('express');
const router = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// GET ROUTE

router.get('/', (req, res) => {

  let queryText = `
  
    SELECT * FROM "todo" ORDER BY "id";
  `
  pool.query(queryText).then((result) => {
    console.log('In GET sending:', result);

    res.send(result.rows);
  }).catch((error) => {

    console.log('error in GET', error);

    res.sendStatus(500);

  });
});// end GET


// POST ROUTE

router.post('/', (req, res) => {

  console.log('Object from client POST', req.body);
  const newTask = req.body;

  const queryText = `
    INSERT INTO "todo" ("task")
    VALUES ($1);
  
  `;

  pool.query(queryText, [newTask.task])

  .then((result) => {
    console.log('In POST sending:', result);

    res.sendStatus(200);
  }).catch((error) => {

    console.log('error in POST', error);

    res.sendStatus(500);

  });

  });










module.exports = router;