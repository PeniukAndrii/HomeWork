/* 1-3 Завдання

function func(y){
y();
}
function func2(arr){
    console.log(arr.sort());
}
func(function(){
    func2([1,2,5,7,2,4,9,5,6,54,21,34,45,23,98,2,3,1,2,3])
})
*/

/* 4 Завдання
function func(x){
    x();
}
function func2(arr){
    console.log(arr.sort((a,b)=>{return a-b}));
}
func(function(){
    func2([1,2,5,7,2,4,9,5,6,54,21,34,45,23,98,2,3,1,2,3])
})
*/

/* 5 Завдання
let mass=[1,2,5,7,2,4,9,5,6,54,21,34,45,23,98,2,3,1,2,3];
mass.filter((value)=>{
    if(!(value%3)) console.log(value);
})
*/

/* 6 Завдання
function func(arr){
arr.filter((value)=>{
    if(!(value%10)) console.log(value);
})
}
func([1,20,5,7,2,4,10,5,6,54,21,34,45,23,98,2,3,1,2,30]);
*/

/* 7 Завдання
function func(arr){
    arr.forEach(value => {
        console.log(value);
    });
}
func([1,20,5,7,2,4,10,5,6,54,21,34,45,23,98,2,3,1,2,30]);
*/

/* 8 Завдання
function func(arr){
    arr.map((value)=>{
        console.log(value*3);
    })
}
func([1,20,5,7,2,4,10,5,6,54,21,34,45,23,98,2,3,1,2,30]);
*/

/* 9-11 Завдання
function func(arr){
    console.log(arr.sort())
}
func(['Andrii','Bogdan','Sasha','Masha','Dasha','Ira','Vira','Katya','Vanya','Igor','Vova','Karina','Da','Ne','Mb','kyky'])
*/

/* 12 Завдання
function func(arr){
    console.log(arr.sort((a,b)=>{return -1}));
}
func(['Andrii','Bogdan','Sasha','Masha','Dasha','Ira','Vira','Katya','Vanya','Igor','Vova','Karina','Da','Ne','Mb','kyky'])
*/

/* 13 Завдання
function func(arr){
    arr.forEach(value => {
        if(value.length<=4){
            return
        }
        console.log(value);
    });
}
func(['Andrii','Bogdan','Sasha','Masha','Dasha','Ira','Vira','Katya','Vanya','Igor','Vova','Karina','Da','Ne','Mb','kyky'])
*/

/* 14 Завдання
let newMass=[];
function func(arr){
        arr.map((value)=>{
        return newMass.push(value+"!")
    })
    console.log(newMass);
    console.log(arr); // не мутований, все окей)
}
func(['Andrii','Bogdan','Sasha','Masha','Dasha','Ira','Vira','Katya','Vanya','Igor','Vova','Karina','Da','Ne','Mb','kyky'])
*/

/* 15-19 Завдання
function func(arr){
        arr.sort((a,b)=>{
            return a.age-b.age; // Від < До >
        })
    console.log(arr);
}
function func(arr){
        arr.sort((a,b)=>{
            return b.age-a.age // Від > До <
        })
    console.log(arr);
}
func([
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}]);
*/

/* 20 Завдання
function func(arr){
        arr.sort((a, b)=>{
           return a.name.length-b.name.length; // Від < До >
        })
    console.log(arr);
}
function func(arr){
    arr.sort((a, b)=>{
       return b.name.length-a.name.length; // Від > До <
    })
console.log(arr);
}
func([
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}]);
*/

/* 21-22 Завдання
function func(arr){
    let cloneArr=JSON.parse(JSON.stringify(arr))
    cloneArr.forEach((value, index) => {
     value.id=index
    });
    cloneArr.sort((a,b)=>{
        return b.id-a.id; // or return a.id-b.id;
    })
    console.log(arr)
    console.log(cloneArr)
}


func([
{name: 'vasya', age: 31, status: false},
{name: 'petya', age: 30, status: true},
{name: 'kolya', age: 29, status: true},
{name: 'olya', age: 28, status: false},
{name: 'max', age: 30, status: true},
{name: 'anya', age: 31, status: false},
{name: 'oleg', age: 28, status: false},
{name: 'andrey', age: 29, status: true},
{name: 'masha', age: 30, status: true},
{name: 'olya', age: 31, status: false},
{name: 'max', age: 31, status: true}]);
*/

/* 25 Завдання
function func(y){
    y();
}
function func2(a,b){
    console.log(a+b=${a+b});
    console.log(a-b=${a-b});
    console.log(a*b=${a*b});
    console.log(a/b=${a/b});
}
func(function(){
    func2(10,2)
})
*/

/* 26 Завдання
function func(y){
    y();
}
function func2(a,b, c){
    console.log(a+b+c=${a+b+c});
    console.log(a-b-c=${a-b-c});
    console.log(a*b*c=${a*b*c});
    console.log(a/b/c=${a/b/c});
}
func(function(){
    func2(10, 2, 3)
})
*/

/* 74-85 Завдання
class car{
    constructor(mark,power,owner,price,year){
        this.mark=mark;
        this.power=power;
        this.owner=owner;
        this.price=price;
        this.year=year;
    }
    info(){
        console.log(this);
    }
    repair(){
            this.power=this.power*1.1;
            console.log(this);
    }
    newOwner(newOwner){
        this.owner=newOwner;
    }
}
class owners{
    constructor(name,age,exp){
        this.name=name;
        this.age=age;
        this.exp=exp;
    }
}
let own=[
owner1=new owners('Andrii',19,1),
owner2=new owners('Oleg',22,1),
owner3=new owners('Igor',26,2),
owner4=new owners('Vova',23,3),
owner5=new owners('Bodia',24,3),
owner6=new owners('Arsen',31,6),
owner7=new owners('Mark',30,4)
];

let cars=[
car1=new car('MB',270,owner1,3300,2019),
car2=new car('Lancer',240,owner2,3200,2018),
car3=new car('Volvo',300,owner3,3400,2010),
car4=new car('Renault',250,owner4,3500,2001),
car5=new car('Lada',120,owner5,1000,2018),
car6=new car('Skoda',150,owner6,4000,2019),
car7=new car('VolksWagen',99,owner7,5000,2005)
]

cars.map((value,index)=>{
    if(!(index%2)){
        value.power=value.power*1.1
        value.price=value.price*1.05
    }
})
own.map((value)=>{
    if(value.exp<5 && value.age>25){
        value.exp++
    }
})
car2.newOwner(new owners('Vitalik',30,11));
car4.newOwner(new owners('Sasha',31,12));
car6.newOwner(new owners('Anton',32,13));

car1.info();
car2.repair()
car3.info();
car4.repair()
car5.info();
car6.repair()
car7.info();
let b=cars.reduce((acc, value)=>{
    return value.price+acc
}, 0)
console.log(`Сума всіх авто=${b}`)
*/

/* 87-96 УЛЬТРА КОСТИЛЬ- НЕ ВИВОДИТЬ -1...
let mass=[1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
let key=0;
let newMass=[];
mass.filter((value,index)=>
    value===key ? newMass.push(index) : newMass.push()
)
console.log(`MinIndex = ${newMass[0]}`)
console.log(`MaxIndex = ${newMass.reverse()[0]}`)


/* CLASS WORK 1
let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
{producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
{producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
{producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
{producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
{producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
{producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
{producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
{producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
{producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
{producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
{producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
{producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
/* CLASS 39
cars.filter((value)=>{
    if(value.volume>=3) console.log(value);
})
*/



/* CLASS 40
cars.filter((value)=>{
    if(value.volume==2) console.log(value);
})
*/

/* CLASS 41-42
cars.filter((value)=>{
    if(value.producer=='mercedes'&& value.volume>=3) console.log(value);
})
*/

/* CLASS 43
cars.filter((value)=>{
    if(value.producer=='subaru'&& value.volume>=3) console.log(value);
})
*/

/* CLASS 44
cars.filter((value)=>{
    if(value.power>=300) console.log(value);
})
*/

/* CLASS 45
cars.filter((value)=>{
    if(value.producer=='subaru'&&value.power>=300) console.log(value);
})
*/

/* CLASS 46
cars.filter((value)=>{
    if(value.engine.includes('ej')) console.log(value);
})
*/

/* CLASS 47
cars.filter((value)=>{
    if(value.producer=='subaru' && value.power>=300 && value.engine.includes('ej')) console.log(value);
})
*/

/* CLASS 48
cars.filter((value)=>{
    if(value.volume<3 &&value.producer=='mercedes') console.log(value);
})
*/

/* CLASS 49
cars.filter((value)=>{
    if(value.volume>2 && value.power>250) console.log(value);
})
*/

/* CLASS 50
cars.filter((value)=>{
    if(value.power>250 && value.producer=='bmw') console.log(value);
})
*/

/* CLASS WORK 2
let users = [
{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
{id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
{id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
{id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
{id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
{id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
{id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
{id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
{id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

/* CLASS 56-57
users.sort((a,b)=>{return b.id-a.id // a.id-b.id Від < до >
})
console.log(users)
*/

/* CLASS 58-59
users.sort((a,b)=>{
    return b.age-a.age // a.id-b.id Від < до >
})
console.log(users)
*/

/* CLASS 60
users.sort((a, b)=>{
if (a.name > b.name) {
    return 1;
  }
    return -1;
})
console.log(users)
*/

/* CLASS 61
users.sort((a, b)=>{
if (a.name < b.name) {
    return 1;
  }
    return -1;
})
console.log(users)
*/

/* CLASS 62
users.sort((a, b)=>{
    return a.address.number-b.address.number
})
console.log(users)
*/

/* CLASS 63
users.filter((value)=>{
    if(value.age<=30) console.log(value);
})
*/

/* CLASS 64
users.filter((value)=>{
    if(!value.status) console.log(value);
})
*/

/* CLASS 65
users.filter((value)=>{
    if(!value.status && value.age<=30) console.log(value);
})
*/

/* CLASS 66
users.filter((value)=>{
    if(!(value.address.number%2)) console.log(value)
})
*/