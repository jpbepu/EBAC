function Animal(name) {

    this.name = name;

    this.eat = ()=> console.log(`${this.name} is eating`)


}

function Rabbit(name, color) {

    this.color = color;

    Animal.call(this, name);
}

function Dog(name, color) {

    this.color = color;

    Animal.call(this, name);
}

function Cat(name, color) {

    this.color = color;

    Animal.call(this, name);
}


const rabbit = new Rabbit('Fred', 'white');
const dog = new Dog('Liz', 'brown');
const cat = new Cat('Maou', 'black');


console.log(`${rabbit.name}, ${dog.name}, ${cat.name}`)