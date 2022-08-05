const { Cars } = require('../../../models');

module.exports = {
    getAllCars(req, res){
        Cars.findAll()
        .then((cars)=>{
            res.status(200).json({
                status: "ok",
                data : cars
            });
        })
        .catch((err)=>{
            res.status(401).json({
                status: "error",
                error : err.message
            });
        });
    },

    addCar(req,res){
        const carName = req.body.carName;
        const price = req.body.price;
        const model = req.body.model;

        Cars.create({
            carName,
            price,
            model
        })
        .then((car)=>{
            console.log('car successfully created')
        })
        .catch((err)=>{
            res.status(401).json({
                status:'error creating car',
                error : err.message
            })
        })
    }

}