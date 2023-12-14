const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

function rGen() {
  return Math.ceil(Math.random() * 5) + 1;
}

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

router.get('/random', (req, res) => {
  // GET route code here
  const rand = rGen();
  console.log('inside /api/grid/random -- generating random num from 1-6 ::', rand);

  res.send(rand);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
