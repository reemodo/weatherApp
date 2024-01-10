const express = require("express")
const router = express.Router()
const City = require('../model/City.js')
const Controller = require('../utlities/Controller.js')

router.get('/:name', function (req, res) {
    const name = req.params.name
    Controller.fetchDataByApi(name).then((city)=> res.send(city))
})
router.get('/', function (req, res) {
    //TODO : need to move all database functions to the following Database.Quires.findCity()
   City.find({}).then((data) => {
        res.send(data)})
})
router.post('/',function(req,res){
    const newCityData = req.body
    const newCity = new City(newCityData)
    newCity.save().then((data) => {
        console.log(`The amount of the expense: ${data.name} and what you spent your money on ${data.temperature}`)
        res.end()})
})
router.delete('/:name', function(req, res){
    const cityName = req.params.name 
    City.findOneAndDelete( {name: cityName } ).then((data) => {
            res.send({data})})
})


module.exports = router