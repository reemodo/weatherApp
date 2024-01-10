class Render {
    constructor(){
        this.cityContainer = $('.cityContainer')
        this.citySource = $('#citySource')
        this.cityAddSource = $('#cityAddSource')

    }
    renderCity(data){
        const source = this.citySource.html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        this.cityContainer.append(newHTML)
    }
    renderAdd(data){
        const source = this.cityAddSource.html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        this.cityContainer.append(newHTML)
    }
}