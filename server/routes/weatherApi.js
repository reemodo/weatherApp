const express = require("express")
const router = express.Router()
const Database = require('../utilities/DatabaseManager.js')
const Controller = require('../utilities/Controller.js')
const { error } = require("jquery")

router.get('/:name', function (req, res) {
    const name = req.params.name
    Controller.fetchDataByApi(name).then((city)=> res.send(city))
        .catch(() => res.status(400).end())
})
router.get('/', function (req, res) {
   Database.findCities().then((data) => {res.send(data)})
})
router.post('/',function(req,res){
    const newCityData = req.body
    Database.addNewCity(newCityData).then((data) => {
        console.log(`The amount of the expense: ${data.name} and what you spent your money on ${data.temperature}`)
        res.end()})
        .catch(() => res.status(400).end())
})
router.delete('/:name', function(req, res){
    const cityName = req.params.name 
    Database.findAndDeleteCity(cityName).then((data) => {res.send({data})})
        .catch(() => res.status(400).end())
})


module.exports = router