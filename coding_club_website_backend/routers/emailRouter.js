const express = require('express');
const router = express.Router();
const joinTeamController = require('../controllers/emailController');

// Define the route to handle form submissions
router.post('/email', joinTeamController.sendEmail);

module.exports = router;