const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Welcome to reMindPrep').status(200);
});

module.exports = router;