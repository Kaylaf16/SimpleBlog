const express = require('express');
const router = express.Router();

// routing separated
router.use('/posts', require('./posts')); // this route is primarily for the database manipulation (CRUD)
module.exports = router;
