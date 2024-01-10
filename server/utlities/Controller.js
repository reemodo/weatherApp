const { consts } = require('../../config.js')
const axios = require('axios')
class Controller{
    static  fetchDataByApi = function(name){
        return axios.get(`${consts.weatherApiByName(name)}`).then((response) =>
            { const temperature = Math.floor(response.data.main.temp)
              const condition = response.data.weather[0].main
              const conditionPic = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
                return {name,temperature , condition,conditionPic}
        })
    }
}
module.exports = Controller