function coffeeDrinks(size, name) {
    this.size = size;
    this.name = name;

    this.getSize = ()=> {
        if (this.size == 0.2)
            return "small";
        else if (this.size == 0.4)
            return "medium";
        else if (this.size == 0.6)
            return "large";
    }


    this.toString = () => {
        console.log(`You’ve ordered a ${this.getSize()} ${this.name} coffee`);
    }

}


let coffee1 = new coffeeDrinks("0.4", "Turkish");
coffee1.toString();

let coffee2 = new coffeeDrinks("0.6", "Espresso");
coffee2.toString();

let coffee3 = new coffeeDrinks("0.2", "Macchiato");
coffee3.toString();