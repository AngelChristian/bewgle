const router = require('express').Router();
const { allProcess } = require('../controllers/process.controller');

router.use('/', allProcess);

module.exports = router;
