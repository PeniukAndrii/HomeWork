/*task-1*/

/* 1 Завдання
let dog = {
    name : 'bobik',
    age : 2,
    children: false,
    breed: 'alabaii',
    color: 'white'
}
let friend = {
    name: 'Sergei',
    age: 17,
    children: false,
    girl: true,
    car: true
}
let car = {
    brand: 'audi',
    model: 'RS6',
    type: 'universal',
    engine: "4.0-liter V-8",
    color: 'black'
}
let home = {
    location: 'Lviv',
    place: 'center',
    room: 3,
    floor: 5,
    elevator: true
}
let book = {
    name: 'абетка',
    color: 'white',
    page: 20,
    language: 'Українська',
    translation: false
}
*/

/* 2 Завдання
let dog=["Бобік","Тузік","Старк","Танос","Тор"];
let people=["Тарас","Андрій","Степан","Роман","Сергій"];
let car=["audi","lada","ЖИГУЛІ ВСЯКІ","Dewoo","Volvo",];
console.log(dog, people, car);*/

/* 3 Завдання
let home = {
    location: ['Ukraine','Lviv'],
    place: 'center',
    room: 3,
    floor: 5,
    table:{
        age:1,
        condition:'new'
    }
}
let toy = {
    made: {
        cotton:90,
        cloth:10,
    },
    condition: 'new',
    color: 'white',
    size: ["15","15"],
    animal: false
}
let driver = {
    name: 'Oleg',
    age:30,
    pets:false,
    family:{
        Wife:'Olga',
        Son: 'Ivan'
    },
    live: ['Ukraine','Odessa','Bolotna.St'],
}
let table={
    material:'woods',
    legs:4,
    condition:{
      front:'good',
      back:'bad'
    },
    color:['white','black'],
    broke:false
}
let bag={
    color:['white','black','purple'],
    straps:2,
    condition:{
        front:'good',
        back:'good'
    },
    hole:false,
    sex:'girl'
}
console.log(home, toy, driver, table, bag);*/

/* 4 Завдання
let users = [
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
    {name: 'max', age: 31, status: true}
];
console.log(users[7].status);
console.log(users[10].status);
console.log(users[9].name);
/!*for (let i = users.length-2; i > 0; i+=2) {
    console.log(users[i].name);
}*!/
console.log(users[2].name);
console.log(users[6].age);
console.log(users[10].status);
console.log(users[3].age, users[9].age);
console.log(users[5].status, users[5].age);*/

/* 5 Завдання
let content = document.getElementById('content');
let rules = document.getElementById('rules');

content.innerText= 'Дарооуу ------------------------';
rules.innerText='ДАДА';
content.style.backgroundColor='red';
content.style.color='blue';
rules.style.color='blue';
rules.style.backgroundColor='red';
console.log(rules.classList);
rules.classList.add('fc_bp');

let element = document.getElementsByClassName('fc_rules');
for(let elements of element){
    elements.style.color='red';
}*/

/* task-2*/

/* 1-4 Завдання
let Bro = {
    name: 'Марк',
    age: 18,
    car: false
}
let pet = {
    type: 'Кіт',
    age: 5,
    color: 'Сірий'
}
let car = {
    brand: 'audi',
    model: 'RS7',
    type: 'universal'
}
let home = {
    location:'Kyiv',
    place: 'center',
    room: 3,
}
let pc = {
    mouse:true,
    monitor:true,
    ubuntu:false
}


let phone = {
     size:{
        height:20,
        with:20
    },
    brand:['Google','Xiaomi','Apple'],
    color:'white',
    frontCam:false,
}
let mouse={
    size:{
        height: 10,
        with: 5
    },
    brand:['Logitech','a4tech'],
    price: 100
}
let keyboard={
    size:{
        with:200,
        height:40
    },
    brand:['Logitech', 'a4tech'],
    price:80,
    color:'black'
}
let man = {
    name:'Oleg',
    wife:true,
    son:{
        age:2,
        heirColor:'black',
    },
    country:['USA','Ukraine']
}
let cars = {
    brand:{
        model:'audi',
        type:'a4'
    },
    price:[4000, 7000, 8000],
    color: 'green',
    turbo:true
}

/!* 3 Завдання
for (const mouseKey in phone) {
    console.log(mouseKey)
}
for (const mouseKey in mouse) {
    console.log(mouseKey)
}
for (const mouseKey in keyboard) {
    console.log(mouseKey)
}
for (const mouseKey in man) {
    console.log(mouseKey)
}
for (const mouseKey in cars) {
    console.log(mouseKey)
}
for (const mouseKey in Bro) {
    console.log(mouseKey)
}
for (const mouseKey in pet) {
    console.log(mouseKey)
}
for (const mouseKey in car) {
    console.log(mouseKey)
}
for (const mouseKey in home) {
    console.log(mouseKey)
}
for (const mouseKey in pc) {
    console.log(mouseKey)
}*!/

console.log(Object.keys(pet));
console.log(Object.keys(Bro));
console.log(Object.keys(car));
console.log(Object.keys(home));
console.log(Object.keys(pc));
console.log(Object.keys(phone));
console.log(Object.keys(mouse));
console.log(Object.keys(keyboard));
console.log(Object.keys(man));
console.log(Object.keys(cars));
*/

/* 5-10 Завдання
let cars = [
    BMW = {name:'BMW',model:"i3", year:2015, power:400, color:'blue'},
    Audi = {name:'Audi',model:'rs6',year:2016, power:600, color:"black"},
    Volvo = {name:'Volvo',model:'vc90',year:2014, power:200, color:"white"},
    Ford = {name:'Ford',model:"Mustang", year:2015, power:300, color:'yellow'},
    Mitsubishi = {name:'Mitsubishi',model:"Lancer-Evo9", year:2003, power:500, color:'black'},
    Lada = {name:'Lada',model:"2105", year:2000, power:90, color:'white'},
    Honda = {name:'Honda ',model:"s2000", year:2001, power:300, color:'red'},
    Acura = {name:'Acura',model:"SunGlass", year:201, power:200, color:'blue'},
    SAAB = {name:'SAAB',model:"2000", year:2000, power:250, color:'black'},
    Nissan = {name:'Nissan',model:"Leaf", year:2016, power:150, color:'blue'},
]

let cities = [
    Turkey = {name:"Turkey", population:"15,519,267", county:"faffaaf", region:"fajfsfa"},
    Uganda = {name:"Uganda", population:"10,400,000", county:"gagagu", region:"12jfg3f"},
    Kazahstan = {name:"Kazahstan", population:"11,519,267", county:"fafaffa", region:"fajfgsfa"},
    Kirov = {name:"Kirov ", population:"12,519,264", county:"fafafaf", region:"fjfgasfa"},
    UK = {name:"UK", population:"17,419,262", county:"fafafajf", region:"fajfgsfa"},

]

let cars2 = [
    BMW = {name:'BMW',model:"i3", year:2015, power:400, color:'blue',driver:{name:"Igor", age:19, gender:'man',exp:1}},
    Audi = {name:'Audi',model:'rs6',year:2016, power:600, color:"black",driver:{name:"Oleg", age:23, gender:'man',exp:4}},
    Volvo = {name:'Volvo',model:'vc90',year:2014, power:200, color:"white",driver:{name:"Andrii", age:30, gender:'man',exp:9}},
    Ford = {name:'Ford',model:"Mustang", year:2015, power:300, color:'yellow',driver:{name:"Olga", age:19, gender:'woman',exp:1}},
    Mitsubishi = {name:'Mitsubishi',model:"Lancer-Evo9", year:2003, power:500, color:'black',driver:{name:"Alexander", age:35, gender:'man',exp:10}},
    Lada = {name:'Lada', model:"2105", year:2000, power:90, color:'white',driver:{name:"Vova", age:50, gender:'man',exp:25}},
    Honda = {name:'Honda ',model:"s2000", year:2001, power:300, color:'red',driver:{name:"Taras", age:32, gender:'man',exp:7}},
    Acura = {name:'Acura',model:"SunGlass", year:201, power:200, color:'blue',driver:{name:"Mark", age:25, gender:'man',exp:9}},
    SAAB = {name:'SAAB',model:"2000", year:2000, power:250, color:'black',driver:{name:"Roman", age:28, gender:'man',exp:6}},
    Nissan = {name:'Nissan',model:"Leaf", year:2016, power:150, color:'blue',driver:{name:"Nazar", age:29, gender:'man',exp:10}},
]

/!* WHILE
let i=0;
while(i<=cars.length){
    console.log(cars[i]);
    i++;
}
let j=0;
while(j<=cars2.length){
    console.log(cars2[j]);
    j++;
}
let k=0;
while(k<=cities.length){
    console.log(cities[k]);
    k++;
}*!/

/!* FOR
for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
}
for(let j=0; j<cars2.length; j++){
    console.log(cars2[j]);
}
for(let k=0; k<cities.length; k++){
    console.log(cities[k]);
}*!/

/!* FOR OF
for(let i of cars){
    console.log(i);
}
for(let k of cars2){
    console.log(k);
}
for(let j of cities){
    console.log(j);
}*!/
*/

/* 11-12 Завдання
let Bro = {
    name: 'Марк',
    age: 18,
    car: false
}
let pet = {
    type: 'Кіт',
    age: 5,
    color: 'Сірий'
}
let car = {
    brand: 'audi',
    model: 'RS7',
    type: 'universal'
}
let home = {
    location:'Kyiv',
    place: 'center',
    room: 3,
}
let pc = {
    mouse:true,
    monitor:true,
    ubuntu:false
}

let CopyBro = JSON.stringify(Bro);
let CopyPet = JSON.stringify(pet);
let CopyCar = JSON.stringify(car);
let CopyHome = JSON.stringify(home);
let CopyPc = JSON.stringify(pc);
console.log(CopyBro, CopyCar, CopyPc,CopyHome, CopyPet);

let ParseBro = JSON.parse(CopyBro);
let ParsePet = JSON.parse(CopyPet);
let ParseCar = JSON.parse(CopyCar);
let ParseHome = JSON.parse(CopyHome);
let ParsePc = JSON.parse(CopyPc);
console.log(ParseBro, ParsePet, ParseCar, ParseHome, ParsePc);*/

/* 13 Завдання
let cars = [
    BMW = {name:'BMW',model:"i3", year:2015, power:400, color:'blue'},
    Audi = {name:'Audi',model:'rs6',year:2016, power:600, color:"black"},
    Volvo = {name:'Volvo',model:'vc90',year:2014, power:200, color:"white"},
    Ford = {name:'Ford',model:"Mustang", year:2015, power:300, color:'yellow'},
    Mitsubishi = {name:'Mitsubishi',model:"Lancer-Evo9", year:2003, power:500, color:'black'},
    Lada = {name:'Lada',model:"2105", year:2000, power:90, color:'white'},
    Honda = {name:'Honda ',model:"s2000", year:2001, power:300, color:'red'},
    Acura = {name:'Acura',model:"SunGlass", year:201, power:200, color:'blue'},
    SAAB = {name:'SAAB',model:"2000", year:2000, power:250, color:'black'},
    Nissan = {name:'Nissan',model:"Leaf", year:2016, power:150, color:'blue'},
]

for(let i=0; i<cars.length;i++){
    let CopyCars=JSON.stringify(cars[i]);
    console.log(CopyCars);
}*/

/* 14 Завдання
let cities = [
    Turkey = {name:"Turkey", population:"15,519,267", county:"faffaaf", region:"fajfsfa"},
    Uganda = {name:"Uganda", population:"10,400,000", county:"gagagu", region:"12jfg3f"},
    Kazahstan = {name:"Kazahstan", population:"11,519,267", county:"fafaffa", region:"fajfgsfa"},
    Kirov = {name:"Kirov ", population:"12,519,264", county:"fafafaf", region:"fjfgasfa"},
    UK = {name:"UK", population:"17,419,262", county:"fafafajf", region:"fajfgsfa"},
]
let i=0;
while(i<cities.length){
    let CopyCities=JSON.stringify(cities[i]);
    console.log(CopyCities);
    i++;
}*/

/* 15 Завдання
let cars2 = [
    BMW = {name:'BMW',model:"i3", year:2015, power:400, color:'blue',driver:{name:"Igor", age:19, gender:'man',exp:1}},
    Audi = {name:'Audi',model:'rs6',year:2016, power:600, color:"black",driver:{name:"Oleg", age:23, gender:'man',exp:4}},
    Volvo = {name:'Volvo',model:'vc90',year:2014, power:200, color:"white",driver:{name:"Andrii", age:30, gender:'man',exp:9}},
    Ford = {name:'Ford',model:"Mustang", year:2015, power:300, color:'yellow',driver:{name:"Olga", age:19, gender:'woman',exp:1}},
    Mitsubishi = {name:'Mitsubishi',model:"Lancer-Evo9", year:2003, power:500, color:'black',driver:{name:"Alexander", age:35, gender:'man',exp:10}},
    Lada = {name:'Lada', model:"2105", year:2000, power:90, color:'white',driver:{name:"Vova", age:50, gender:'man',exp:25}},
    Honda = {name:'Honda ',model:"s2000", year:2001, power:300, color:'red',driver:{name:"Taras", age:32, gender:'man',exp:7}},
    Acura = {name:'Acura',model:"SunGlass", year:201, power:200, color:'blue',driver:{name:"Mark", age:25, gender:'man',exp:9}},
    SAAB = {name:'SAAB',model:"2000", year:2000, power:250, color:'black',driver:{name:"Roman", age:28, gender:'man',exp:6}},
    Nissan = {name:'Nissan',model:"Leaf", year:2016, power:150, color:'blue',driver:{name:"Nazar", age:29, gender:'man',exp:10}},
];

for(let i in cars2){
    let CopyCars2=JSON.stringify(cars2[i]);
    let CopyCopyCars2=JSON.parse(CopyCars2);
    console.log(CopyCopyCars2);
}*/

/* 16 Завдання
let users=[
    user1 = {name:"Andrii", age:19, skills:['HTML/CSS','JS']},
    user2 = {name:"Oleg", age:22, skills:['HTML/CSS','JS','C++']},
    user3 = {name:"Roman", age:21, skills:['HTML/CSS','JS','PHP']},
];

for(let i of users){
    console.log(i);
    for(let j of i.skills){
        console.log(j);
    }
}*/

/* 17 Завдання
let users=[
    user1 = {name:"Andrii", age:19, skills:['HTML/CSS','JS']},
    user2 = {name:"Oleg", age:22, skills:['HTML/CSS','JS','C++']},
    user3 = {name:"Roman", age:21, skills:['HTML/CSS','JS','PHP']},
];


let filter=[];
for(let i of users){
    console.log(i);
    for(let j of i.skills){
        filter.push(j)
    }
}
console.log(filter);*/

/* 19 Завдання
let users = [{name: 'vasya', age: 31, status: false, skills: ['java','js']},
    {name: 'petya', age: 30, status: true, skills: ['java','js','html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql','mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java','js']},
    {name: 'max', age: 30, status: true, skills: ['mysql','mongo']}];

for(let i of users){
    console.log(i);
    for(let j of i.skills){
        console.log(j);
    }
}*/

/* Завдання 24-27
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];*/

/* 24 Завдання
let address2 =[];
for(let i of users){
    address2.push(i.address)
}
for (let j=0; j<address2.length; j++){
    console.log(address2[j]);
}*/

/* 25 Завдання
for(let i in users){
    let div=document.createElement('div');
    div.innerHTML=`${users[i].name} ${users[i].age} ${users[i].status} ${users[i].address}`
    document.body.appendChild(div)
}*/

/* 26-27 Завдання
for(let i = 0; i < users.length; i++){
    let div0 = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let div4_1=document.createElement('div');
    let div4_2=document.createElement('div');
    let div4_3=document.createElement('div');
    let div4_4=document.createElement('div');
    div1.innerHTML=`Name= ${users[i].name}`;
    div2.innerHTML=`Age= ${users[i].age}`;
    div3.innerHTML=`Status= ${users[i].status}`;
        for(let j = 0; j < users.length;j++){
            div4_1.innerHTML=`Citi= ${users[i].address.city}`
            div4_2.innerHTML=`Country= ${users[i].address.country}`
            div4_3.innerHTML=`Street= ${users[i].address.street}`
            div4_4.innerHTML=`HouseNumber= ${users[i].address.houseNumber}<br><br>`
        }
    document.body.appendChild(div0);
        div0.appendChild(div1);
        div0.appendChild(div2);
        div0.appendChild(div3);
        div0.appendChild(div4);
        div4.appendChild(div4_1);
        div4.appendChild(div4_2);
        div4.appendChild(div4_3);
        div4.appendChild(div4_4);
}*/

/* 28 Завдання
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},];

let mass =[];
for(let i of usersWithId){
    for(let j of citiesWithId){
        let xxx={...i, ...j}
        if(xxx.id===xxx.user_id){
            mass.push(xxx)
        }
    }
}
console.log(mass)*/

/* 100-102 Завдання
let Block1 = document.getElementById('my_id');
let Block1_1 = document.getElementsByClassName('my_class');
let Block1_2 = document.getElementsByTagName('div');

 // 1 Звертання
Block1.innerText="ahalaiMaxalai";
 // 2 Звертання
for(let i=0; i < Block1_1.length; i++){
    Block1_1[i].innerText="tyt_text"
}
 // 3 Звертання
for(let i=0; i < Block1_2.length; i++){
    Block1_2[i].innerText="tyt_text2"
}

 // 1 Змінна
Block1.style.width="400px";
Block1.style.height="400px";
Block1.style.backgroundColor="red";
 // 2 Змінна
for(let i of Block1_1){
    i.style.backgroundColor='red';
    i.style.width='600px';
    i.style.height='300px';
}
 // 3 Змінна
(let j of Block1_2){
    j.style.backgroundColor='red';
    j.style.width="200px";
    j.style.height="300px";
}*/

/* 103 Завдання
table1 = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
table1.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td2);
tr.appendChild(td3);
document.body.appendChild(table1);
*/

/* 104 Завдання
let table= document.createElement("table");
for(let i=0; i<10; i++){
    let tr=document.createElement("tr");
    table.appendChild(tr);
    let td=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
}
document.body.appendChild(table);*/

/* 105 Завдання
let table= document.createElement("table");
document.body.appendChild(table);
for(let i=0; i<10; i++){
    let tr=document.createElement("tr");
    table.appendChild(tr);
    for(let j=0; j<5; j++){
        let td=document.createElement("td");
        tr.appendChild(td);
    }
}*/

/* 106 Завдання
let table= document.createElement("table");
document.body.appendChild(table);
let n= prompt("Рядків");
let m= prompt("Стовпців");
for(let i=0; i<n; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < m; j++) {
        let td = document.createElement("td");
        tr.appendChild(td);
    }
}*/

/* 109 Завдання
const div = document.getElementsByTagName("*")
for(let i of div){
    if(i.getAttribute('class')){
        console.log(i)
    }
}
*/

/* 110 Завдання
let div = document.getElementsByTagName("p")
for(let i of div){
    i.innerText='Hello okten'
}
*/

/* 111 Завдання
let div = document.getElementsByTagName('div');
for(let i of div){
    i.style.backgroundColor='red';
}*/
