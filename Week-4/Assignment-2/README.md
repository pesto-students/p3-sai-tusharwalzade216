# Week 4 - Assignment 2

[Welcome to Pesto assignment - 2 from the Week 4](https://pestotech.teachable.com/courses/1782350/lectures/40231555)

Create an object called **Teacher** derived from the **Person** class, and implement a method called **teach** which receives a string called **subject**, and prints out:

<output>[teacher's name] is now teaching [subject]</output>

## Guidelines:

1. The expected output should be achieved using the keyword .prototype.
2. Reference:

<pre>
var Person = function() {};
Person.prototype.initialize = function(name,age){
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach
var him = newTeacher();
him.initialize("Adam", 45);
him.teach("Inheritance");
</pre>

## Outcome:

1. The candidates will understand how inheritance works in JS.
2. The candidates will understand what a prototype keyword is in JS.
