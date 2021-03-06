const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('made it to pizza router.get')
  const queryText = 'SELECT * FROM pizza';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT pizza query', err);
      res.sendStatus(500);
    });
});
module.exports = router;