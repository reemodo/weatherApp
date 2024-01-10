const express = require("express")
const router = express.Router()
const City = require('../model/City.js')
const { consts } = require('../../config.js')
const axios = require('axios')

router.get('/cities/:name', function (req, res) {
    const name = req.params.name
    axios.get(`${consts.weatherApiByName(name)}`).then((response) => {
        axios.get(consts.weathearApiBylat(response.data[0].lat,response.data[0].lon)).then((response)=>
        { const temperature = Math.floor(response.data.main.temp)
          const condition = response.data.weather[0].main
          const conditionPic = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
            res.send({name,temperature , condition,conditionPic})})
    })
})
router.get('/cities', function (req, res) {
   City.find({}).then((data) => {
        res.send(data)})
})
router.post('/cities',function(req,res){
    const newCityData = req.body
    const newCity = new City(newCityData)
    newCity.save().then((data) => {
        console.log(`The amount of the expense: ${data.name} and what you spent your money on ${data.temperature}`)
        res.end()})
})
router.delete('/cities/:name', function(req, res){
    const cityName = req.params.name 
    City.findOneAndDelete( {name: cityName } ).then((data) => {
            res.send({data})})
})


module.exports = router