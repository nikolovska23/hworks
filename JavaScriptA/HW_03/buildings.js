// function GeoLocations(xy, street, city)
// {
// 	this.x = xy[0]; //x
// 	this.y = xy[1]; //y
// 	this.street = street;
// 	this.city = city;
// }

class GeoLocations {
    constructor(xy, street, city) {
        this.x = xy[0];
        this.y = xy[1];
        this.street = street;
        this.city = city;
    }

}


// function Buildings(xy, street, city, buildingType)
// {
// 	this._super.call(this, xy, street, city);
// 	this.buildingType = buildingType;
// }

class Buildings extends GeoLocations {
    constructor(xy, street, city, buildingType) {
        super(xy, street, city);
        this.buildingType = buildingType;
    }
}



// TypeOfObjects.prototype.getObject = function(n)
// {
// 	return this.objects[n];
// }


class TypeOfObjects {
    constructor() {
        this.objects = ["apartment", "penthouse", "house", "hotel"];
    }

    getObject(i) {
        return this.objects[i];
    }
}


//Inheritance
// Buildings.prototype = Object.create(GeoLocations.prototype);
// Buildings.prototype.constructor = Buildings;
// Buildings.prototype._super = GeoLocations;

//New instance with object types only
let objectsTypes = new TypeOfObjects();


//New array with objects in it
let objectsArray = [
    new Buildings([1, 2], 'Str1', 'City1', objectsTypes.getObject(0)),
    new Buildings([3, 4], 'Str2', 'City2', objectsTypes.getObject(1))
]


//Printing the objects in the objectsArray
for (let i = 0, ilen = objectsArray.length; i < ilen; i++) {
    // console.log(`${objectsArray[i].x},  ${objectsArray[i].y},  ${objectsArray[i].street},  ${objectsArray[i].city}, ${objectsArray[i].buildingType}`);

    console.log(Object.values(objectsArray[i]).join(", "));
}

