const express = require('express');
const router = express.Router();
const controllers = require('../app/controllers');

router.get('/api/v1/cars/getcars', controllers.api.v1.cars.getAllCars);
router.post('/api/v1/cars/add', controllers.api.v1.cars.addCar);
router.delete('/api/v1/cars/delete/:id', controllers.api.v1.cars.deleteCar);

module.exports = router;