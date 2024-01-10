class City{
    constructor(name,temperature,condition,conditionPic){
        this.name = name || ""
        this.temperature = 0 || temperature
        this.condition = "" || condition
        this.conditionPic = "" || conditionPic
    }
    async saveCity(){
        const saved = await $.post(`/cities/`,this)
        return saved
    }
    async getCity(cityName){
        const city = await $.get(`/cities/${cityName}`)
        return new City(city.name,city.temperature,city.condition,city.conditionPic)
    }
    async deleteCity(cityName){
        const city =  await $.ajax({
            url:`/cities/${cityName}`,
            type: 'DELETE',
            success: function(data) {
                console.log(data)
            },
            error: function(e){
                return e
            }
        })
    }
}