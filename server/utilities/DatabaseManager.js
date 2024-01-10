const mongoose = require('mongoose')
const City = require('../model/City.js')
class Database {
    static connectDB (){
        //TODO: move the URL To const in config or fo with env
        mongoose.connect("mongodb://127.0.0.1:27017/cityDB", {
        }).catch((err)=> console.log(err))
    }
    static findCities(){
        return City.find({})
    }
    static addNewCity(newCityData){
        const newCity = new City(newCityData)
        return newCity.save()
    }
    static findAndDeleteCity(cityName){
        return City.findOneAndDelete( {name: cityName } )
    }
}
module.exports = Database