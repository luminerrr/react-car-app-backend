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
    };


    

}