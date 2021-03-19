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









module.exports = router;