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

// DELETE
router.delete('/:id', (req, res) => {
  // target id of thing being deleted
  const id = req.params.id;

  console.log('Delete route called with id of: ', id);

  // sql to delete item from database
  const queryText = `DELETE FROM "todo" WHERE "id" = $1;`;

  // sending sql code to postico
  pool.query(queryText, [id])
    .then((result) => {
        
      res.sendStatus(204);

    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});
  
// PUT ROUTE

router.put('/:id', (req, res) => {

  let status = req.body.status;
  const id = req.params.id;
  console.log('This is ID of PUT route', id);
  let queryText; 
  
  console.log('status:', status);

  if (status === 'true'){
      queryText = `UPDATE "todo" SET "complete"=false WHERE "id"=$1`;
  }
  
  if (status === 'false'){
      queryText = `UPDATE "todo" SET "complete"=true WHERE "id"=$1`;
  }
 
  pool.query(queryText, [id])

  .then((result) => {
        
    res.sendStatus(204);

  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  });

});// end PUT








module.exports = router;