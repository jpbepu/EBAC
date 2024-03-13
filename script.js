function Animal(name) {

    this.name = name;

    this.eat = ()=> console.log(`${this.name} is eating`)


}

function Rabbit(name, color) {

    this.color = color;

    Animal.call(this, name);
}

const fred = new Rabbit('Fred', 'grey');
const leelo = new Rabbit('Leelo', 'black');
const rick = new Rabbit('Rick','brown')

console.log(`${fred.name}'s color is ${fred.color}, ${leelo.name}'s color is ${leelo.color}, and ${rick.name}'s color is ${rick.color}`);
