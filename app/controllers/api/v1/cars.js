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
            res.status(200).json({
                status:"Success",
            })
        })
        .catch((err)=>{
            res.status(401).json({
                status:'error creating car',
                error : err.message
            })
        })
    },

    async deleteCar(req,res){
        const car = await Cars.findByPk(req.params.id);
        console.log(car instanceof Cars)
        if(car === null){
            res.status(401).json({
                status:'error',
                message:'car not found!'
            })
        }
        car.destroy()
        .then(()=>{
            res.status(200).json({
                status:'successfully delete car'
            })
        })
        .catch((err)=>{
            res.status(401).json({
                status:'error deleting car',
                error : err.message
            })
        })
        
    }
}