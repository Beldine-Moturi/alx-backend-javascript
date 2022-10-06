const express = require('express');
const AppController = require('../controllers/AppController');

const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

const path = process.argv[2];

router.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

router.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res, path);
});

router.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res, path);
});

module.exports = router;
