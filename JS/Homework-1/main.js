
/*  Завдання 1
let massage=("Hello");
let school=("owu");
let tag=("com");
let country=("ua");
alert(massage);
alert(school);
alert(tag);
alert(country);
let one = (1);
let ten = (10);
let negativeNumber = (-999);
let serialNumber = (123);
const p = (3.14);
const randomConst = (2.7);
let age = (16);
let a = true;
let b = false;
console.log(a);
console.log(b);
document.write(one, ten, negativeNumber, serialNumber, p, randomConst, age);
*/

/* Завдання 2
let massage=("Question");
alert(massage);
let hasWife = confirm("I Married?");
console.log(hasWife===false);
const name = ("I Andrii");
let age = ("19y.o");
document.write(name, age);
*/

/*  Завдання 3
const lastname=("Пенюк");
const name=(" Андрій");
const surname=(" Олегович");

const birthday=(" 26.08.2001");
const RandomNumber=(" 15");
const RandomDate=(" 15.04.2019");

document.write(lastname, name,  surname ,birthday, RandomDate, RandomNumber);
console.log(lastname, name, surname ,birthday, RandomDate, RandomNumber);
alert(lastname);
alert(name);
alert(surname);
alert(birthday);
alert(RandomDate);
alert(RandomNumber);
*/

/*  Завдання 4
let Name = prompt("What is you name?");
let LastName =prompt("What is you LastName?");
let SurName=prompt("What is you SurName?");
console.log(LastName);
console.log(Name);
console.log(SurName);
document.write("<br>Name is- ");
document.write(Name);
document.write("<br>LastName is- ");
document.write(LastName);
document.write("<br>SurName is- ");
document.write(Name);
alert(LastName);
alert(Name);
alert(SurName);
*/

/*  Завдання 5-6
let Name = prompt("What is you name?");
let LastName =prompt("What is you LastName?");
let SurName=prompt("What is you SurName?");
let person = {
    Name: Name,
    LastName: LastName,
    SurName: SurName
}
let Name2 = prompt("What is you name?");
let LastName2 =prompt("What is you LastName?");
let SurName2=prompt("What is you SurName?");
let person2 = {
    Name: Name2,
    LastName: LastName2,
    SurName: SurName2
}
let Name3 = prompt("What is you name?");
let LastName3 =prompt("What is you LastName?");
let SurName3=prompt("What is you SurName?");
let person3 = {
    Name: Name3,
    LastName: LastName3,
    SurName: SurName3
}
let Name4 = prompt("What is you name?");
let LastName4 =prompt("What is you LastName?");
let SurName4=prompt("What is you SurName?");
let person4 = {
    Name: Name4,
    LastName: LastName4,
    SurName: SurName4
}
console.log(person);
console.log(person2);
console.log(person3);
console.log(person4);
*/

/* Задання 7
let number1 = +prompt("input number1");
let number2 = +prompt("input number2");
let number3 = +prompt("input number3");
console.log(number1, number2, number3);
*/

/* Завдання 8
let num1 = prompt("input number1");
let num2 = prompt("input number2");
let num3 = prompt("input number3");
let num4 = prompt("input number4");
let result =((parseInt(num1))+(parseInt(num2))+(parseInt(num3))+(parseInt(num4)));
console.log(result);
*/

/* Завдання 9
let num1 = prompt("input fractions number1");
let num2 = prompt("input fractions number2");
let num3 = prompt("input fractions number3");
let result =((parseFloat(num1))+(parseFloat(num2))+(parseFloat(num3)));
console.log(result);
*/

/* Завдання 10
let num1 = prompt("input number1");
let num2 = prompt("input number2");
let num3 = prompt("input fractions number3");
let result = ((Math.round(num1))+(Math.round(num2))+(Math.round(num3)));
console.log(result);
*/

/* Завдання 11
let num1 = prompt("input number1");
let num2 = prompt("input number2");
console.log(Math.pow(parseInt(num1), parseInt(num2)));
*/

/* Завдання 12
let a = 100, b=100; c=true; d=undefined;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);*/

/* Завдання 13
console.log(5 < 6);
console.log(5 > 6);
console.log(5 >= 6);
console.log(5 === 6);
console.log(10 === 10);
console.log(10 >= 10);
console.log(10 !== 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(123 === '123');
console.log(123 !== '123');*/

/* Доп Завдання 1
let num1= prompt("Input number1");
let num2= prompt("Input number2");
let num3= prompt("Input number3");

if(num2 < num1 && num2 < num3){
    if(num1<num3) {
        document.write(num2, num1, num3);
    }
    else{
        document.write(num2, num3, num1);
    }
}
else if(num3 < num1 && num3 <num2){
    if(num2<num1){
        document.write(num3, num2, num1);
    }
    else{
        document.write(num3, num1, num2)
    }
}
else if(num1 < num3 && num1 < num2){
    if(num3<num2){
        document.write(num1, num3, num2);
    }
    else{
        document.write(num1, num2, num3)
    }
}
else{
    document.write("Unknown number")
}*/

/* Доп Завдання 2
let color = prompt("Input color: green, yellow, red or broke");

if (color === 'green'){
    document.write("Иди");
}
else if(color === "yellow"){
    document.write("Подожди");
}
else if(color === "red"){
    document.write("СТОЙ!");
}
else if(color === "broke"){
    document.write("делай что хочешь!");
}*/

/* Доп Завдання 3
let color = prompt("Input color: green, yellow, red or broke");

if (color === 'green'){
    let isRoadClear = confirm("Дорога чиста від машин?");
    if(isRoadClear === true){
        document.write("Иди");
    }
    else{
        document.write("подожди пока нарушители проедут");
    }
}
else if(color === "yellow"){
    let isRoadClear = confirm("Дорога чиста від машин?");
    if(isRoadClear === true){
        document.write("Жди");
    }
    else{
        document.write("все рано жди");
    }
}
else if(color === "red"){
    let isRoadClear = confirm("Дорога чиста від машин?");
    if(isRoadClear === true){
        document.write("стой все рано");
    }
    else{
        document.write("стой и жди");
    }
}
else if(color === "broke"){
    document.write("делай что хочешь!");
}*/

/* Class 1
let str=("Привет");
let num=(123);
let flag=(true);

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);*/

/* Class 2-3
let a1=(5+3);
let a2=(5-3);
let a3=(5*3);
let a4=(5/3);
let a5=(5%3);
let a6=(5%3);
let a7=(3%5);
let a8=(5+"3");
let a9=("5"-3);
let a10=(75+"кг");


console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);*/

/* Class-4
let height=(23);
let width=(10);
let s=(height*width);

console.log(s);*/

/* Class-5
let heightC=(10);
let dC=(4);
let v=(3.14*dC*heightC);
console.log(v);*/

/* Class-6
let n=(3);
let m=(4);
let k=(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k);*/

/* Class-7
let str=("Hello World");
console.log(str);
document.write(str);
alert(str);*/

/* Class-8
let info=("Пенюк Андрій Олегович\n19\nВелосипед)");
alert(info);*/

/* Class-9
let str1=("Кто ");
let str2=("ты ");
let str3=("такой?");
let concatenation=(str1+str2+str3);
document.write(concatenation)*/

/* Class-13
let str1 = +prompt("Enter number1");
let str2 = +prompt("Enter number2");
let result=(str1+str2);
alert(result);*/

/* Class 14
let str1 = prompt("Введіть імя та прізвище");
let str2 = prompt("Скільки вам років?");
alert("Доброго вечера " + str1 + ",мои поздравления что вам " + str2);*/
