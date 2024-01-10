const maneger = new CitiesManeger()
const render = new Render()
const weatherList = []
maneger.getCities().then((citiesList) => {
    citiesList.forEach(city => {
        render.renderCity(city)
        weatherList.push(city)
    })
})

$('body').on("click",'#search-button', function(){
    const name = $(this).closest('div').find('input').val()
    const cityName = name.charAt(0).toUpperCase() + name.substring(1)
    const city = new City ()
    const exestedCity = weatherList.find(city => city.name === cityName)
    if(exestedCity == undefined)
    city.getCity(cityName).then((newCity) =>{
        render.renderAdd(newCity)
        weatherList.push(newCity)
    })
    else alert("exist")
})
$('body').on("click",'#save-button', function(){
    const pathElement = $(this).find('path:first-child')
    const cityName =  $(this).data().name
    const is_saved = pathElement.css("fill") === "none"? false : true
    const city = weatherList.find(city => city.name === cityName )
    if(is_saved){
        city.deleteCity(cityName).then(()=> {
            pathElement.css("fill","none")
            console.log("deleted")
        })}
    else {
        city.saveCity().then(()=> {
        pathElement.css("fill","")
        console.log("saved")
    })}
})
