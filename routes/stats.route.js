const router = require('express').Router();
const {
  getStats,
  getSpecifiedStats,
} = require('../controllers/stats.controller');

router.get('/', getStats);
router.get('/:from/:to', getSpecifiedStats);

module.exports = router;
