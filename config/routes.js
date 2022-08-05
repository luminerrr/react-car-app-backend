const express = require('express');
const router = express.Router();
const controllers = require('../app/controllers');

router.get('/api/v1/cars/getcars', controllers.api.v1.cars.getAllCars);

module.exports = router;