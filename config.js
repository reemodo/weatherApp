const apiKey = "fba62aa6f9ac9c6fcd0e1c2b08b71fca"
const weathearApiBylat = function(lat,lon){
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=Metric`}
const weatherApiByName = function(name){
    return `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${apiKey}`
} 
module.exports =  {consts : {weatherApiByName ,weathearApiBylat } }

