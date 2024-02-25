function Animal(name){
    this.name=name;
}
Animal.prototype.sayName = function(){
    console.log(" My name is "+this.name);
};
function Dog(name,breed){
    Animal.call(this,name);
    this.breed=breed;
}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.costructor=Dog;

Dog.prototype.bark = function(){
    console.log(this.name+" Says woof!");
};
const myAnimal=new Animal(" Animal");
const myDog=new Dog("Buddy","Golden Retriever");
myAnimal.sayName();
myDog.sayName();
myDog.bark();