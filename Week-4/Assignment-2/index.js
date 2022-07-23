var Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
};

var Teacher = function (name, age) {
    Person.call(this, name, age);
};

Teacher.prototype.teach = function (subject) {
    return `${this.name} is now teaching ${subject}`;
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var him = new Teacher();
him.initialize("Adam", 45);
console.log(him.teach("Inheritance"));      // "Adam is now teaching Inheritance"
