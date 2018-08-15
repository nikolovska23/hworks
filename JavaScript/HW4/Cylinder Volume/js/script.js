function cylinder(diameter, height) {
    this.r = diameter / 2;
    this.h = height;



    this.calculateVolume = function () {
        let v = 3.1415 * Math.pow(this.r, 2) * this.h;
        console.log(`V=${v.toFixed(4)}`);
    }
}

let cylinder1 = new cylinder(30, 15);
cylinder1.calculateVolume();