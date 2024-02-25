function Person(name, age) {
    let _name = name;
    this.age = age;
 
    this.getName=function(){
        return _name;
    }
    this.setName=function(newName){
        _name=newName;
    };
}
const person=new Person("Ram",23);
console.log(person.getName());
console.log(person.age);