
class Bus {
    constructor(city, passengers, color) {
        Object.assign(this, { city, passengers, color });

        this.passengers = this.passengers || 52;
        this.color = this.color || 'Yellow';
        this.isWorking = false;
        this.isMoving = false;
    }
}

class CustomBus extends Bus {
    constructor(city, passengers, color, linenumber) {
        super(city, passengers, color);
        Object.assign(this, { linenumber });
        this.linenumber = this.linenumber || this.getRandomLineNumber();
        this.isMoving = true;
    }

    getRandomLineNumber() {
        return parseFloat(Math.random() * 100).toFixed(0);
    }

    getIsMoving() {
        return this.isMoving;
    }

    getIsWorking() {
        return this.isWorking;
    }

    getInfo() {
        return this;
    }
}

class City {
    constructor(name) {
        this.cityName = name;
        this.allBuses = [];
    }

    addBuses(bus) {
        this.allBuses.push(bus);
    }
    removeBuses(i) {
        this.allBuses.splice(i, 1);
    }
}

let buses = [];
let colors = ['Blue', 'Green', 'Red', 'Cian'];
let cities = [newCity('Skopje'), newCity('Bitola'), newCity('Tetovo'), newCity('Veles')];


for (let i = 0; i < 10; i++) {
    let color = colors[i % colors.length];
    let city = cities[i % city.length];
    let newBus = new CustomBus(city, i * 20, color, i + 1);
    city.addBuses(newBus);
}