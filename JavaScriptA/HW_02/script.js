function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
var list = [];
function addressBook() {

    this.addPerson = (person) => {
        list.push(person);
    };

    this.removePerson = (index) => {
        list.splice(index, 1);
    };
}

let me = new Person("Marija", "Nikolovska");
let person1 = new Person("aa", "aaa");
let person2 = new Person("bbb", "bbbbb");

let aBook = new addressBook();

aBook.addPerson(me);
aBook.addPerson(person1);
aBook.addPerson(person2);

aBook.removePerson(1);

console.log(list);
