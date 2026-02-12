class Cone{
    constructor(raio,altura){
        this.raio = raio
        this.altura = altura
    }

    calcularArea(){
        let area = 0.0
        area = Math.PI * this.raio * this.raio
        return area
    }

    calcularVolume(){
        let volume = 0.0
        volume = this.calcularArea() * this.altura / 3
        return volume
    }
}

module.exports = Cone