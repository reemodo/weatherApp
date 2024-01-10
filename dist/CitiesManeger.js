class CitiesManeger{
    constructor(){
        this.citiesList = []
    }
    async getCities(){
        const citiesData = await $.get("/cities")
        this.citiesList = citiesData.map(city => {
            return new City(
               city.name,
               city.temperature,
               city.condition,
               city.conditionPic || ""
            )
          });
        return this.citiesList
    }
}
