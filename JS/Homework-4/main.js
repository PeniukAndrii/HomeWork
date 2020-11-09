/* 1 Завданяя
function func(){
    let mass=[1, 2, 3, 4, 'gg'];
    console.log(mass)
}
func()*/

/* 2 Завдання
function  func(){
    let mass=[]
    for (let i=0; i<10 ;i++){
         mass[i]=Math.random() * 100;
         mass[i]=Math.floor(mass[i]);
    }
    console.log(mass);
}
func();*/

/*
Завдання 3-4
function num(num1, num2, num3){
 let min;
 let max;
 min=Math.min(num1, num2, num3);
 max=Math.max(num1, num2, num3);
 console.log(minimum is- ${min})
 console.log(maximum is- ${max})
}
num(1, 6, 5);*/

/* 3 Завдання 2 варіант розвязку
function num(num1, num2, num3){
    if(num1<num2&&num1<num3) {
        console.log(Lover Num1= ${num1});
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
            console.log(Lover Num2= ${num2});
            return num2;
        }
            else
            console.log(Lover Num3= ${num3});
            return num3;
}
num(1, 6, 5);
*/

/* 5 Завання
function func(){
    let min = arguments[0];
    let max = arguments[0];
    for(let i=0; i<arguments.length;i++){
        if(arguments[i]<min){
            min = arguments[i];
        }
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    console.log(max);
    return min;
}
console.log(func(12, 14, 10, 20, 1));
*/

/* 6 Завдання
function func(arr){
    return arr;
}
console.log(func([12, 14, 11, 10]));
*/

/* 7 Задання
function func(array) {
    let sum = array[0];
    for(let i=0; i < array.length; i++){
        if(sum < array[i]){
            sum = array[i] ;
        }
    }
    return sum;
}
console.log(func([12, 19, 20, 21]));*/

/* 8 Завдання
function func(array){
    let max= array[0];
    for(let i=0; i<array.length; i++){
        if(max>array[i]){
            max=array[i];
        }
    }
    return max;
}
console.log(func([5,7,2,1]));*/

/* 9 Завдання
function func(array){
    let sum=0;
    for(let i=0; i<array.length; i++){
       sum+=array[i]
    }
    return sum;
}
console.log(func([1,2,3,2,1]));*/

/* 10 Завдання
function func(array){
    let sum=0;
    let midl=0;
    for(let i=0; i<array.length;i++){
        sum+=array[i];
        midl=sum/array.length;
    }
    return midl;
}
console.log(func([54,54,54, 20, 20]));*/

/* 11 Задання, забув про шо масив то теж обэкт)
function func(array){
    let sum=0;
    for(let i of array){
        if(typeof i === 'object' &&  !Array.isArray(i)){
            sum++;
        }
    }
    return sum;
}
console.log(func([123, '231',{name:'da', age: 12}, false, {num: 123},{name: "dada"},true, {age:21}, [123]]));
*/

/* 12 Завдання
function func(array){
    let sum=0;
    for(let i of array){
        if(typeof i === 'object' &&  !Array.isArray(i)){
            for(let obj in i){
                sum++
            }
        }
    }
    return sum;
}
console.log(func([123, '231',{name:'da', age: 12}, false, {num: 123, fa:21},{name: "dada"},true, {age:21}, [123]]));


/* 13 Завдання
function func(array1, array2) {
    let sum = [];
    if (array1.length === array2.length) {
        for (let i = 0; i < array2.length; i++) {
            sum[i] = array1[i] + array2[i]
        }
    }
    else console.log('Неріний масив')
    return sum;
}
console.log(func([3,3,4,5],[2,3,4,5]));
*/

/*  19*** Завдання
function func(array, index) {
    console.log(array); //дивитись просто
    let arrayNew=[]; // оголошення пустого масиву
    for (let i = 0; i < array.length; i++) { // цикл залазить в масив
        if (index === i) {   // перевіряє чи вказаний масив === індексу масиву
            arrayNew.push(array[i] + 1); // якщо та, то добавляє 1 і пушить в кінець
        }
        else arrayNew.push(array[i]); // якщо не, просто пустишт в кінець
    }
    return arrayNew; //виводим новий масив за функцію
}
console.log(func([4,2,1,3], 0)); // виводим новий масив + вносим його та індекс*/

/* 20*** Завдання
function func(array){
    let clearMass=[]; // Пустий масив для !==0
    let num=[]  // Масив для == 0
    for (let i of array) { //цикл перевіряє
        if (i === 0) {
            num.push(0) //пушить в масив num якщо==0
        } else clearMass.push(i); // пушить в масив для !==0
    }
   return clearMass.concat(num) //вертає + обєнює два масива
}
console.log(func([5,0,2,3,0])); //вивід...*/

/* DOM 28 Завдання
function func(){
    let element=document.createElement('div')
    document.body.appendChild(element);
    element.innerText="Hello owu";
}
func()
*/

/* 29 Завдання
function func(element='div', text){
    let block=document.createElement(element)
    document.body.appendChild(block);
    block.innerText=text
}
func('div', 'Hello owu!!!')
*/

/* 27-34 Завдання
let cars=[
    {name:'BMW',model:"i3", power:400, color:'blue'},
    {name:'Audi',model:'rs6',power:600, color:"black"},
    {name:'Volvo',model:'vc90',power:200, color:"white"},
    {name:'Ford',model:"Mustang", power:300, color:'yellow'},
    {name:'Mitsubishi',model:"Evo9", power:500, color:'black'},
]

/!* 30-31 Завдання
function func(array, element='div',element_inside) {
    let block = document.createElement(element);
    document.body.appendChild(block);
    for(let i of array){
        let sec = document.createElement(element_inside)
        block.appendChild(sec)
        for(let j=0; j<array.length;j++){
            sec.innerHTML=(array[j])
        }
    }
}
func(cars, 'div', 'p')*!/

//32-34
function func(array, element='div',element_inside) {
    for(let i = 0; i < cars.length; i++){
        let div0 = document.createElement(element);
        let div1 = document.createElement(element_inside);
        let div2 = document.createElement(element_inside);
        let div3 = document.createElement(element_inside);
        let div4 = document.createElement(element_inside);
        div1.innerHTML=`Name= ${cars[i].name}`;
        div2.innerHTML=`Model= ${cars[i].model}`;
        div3.innerHTML=`Power= ${cars[i].power}`;
        div4.innerHTML=`Color= ${cars[i].color}`;
        document.write('<br>')
        document.body.appendChild(div0);
        div0.appendChild(div1);
        div0.appendChild(div2);
        div0.appendChild(div3);
        div0.appendChild(div4);

    }
}
func(cars, 'div', 'div')*/

/* 36-42 Завдання
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
    {id: 4, name: 'petya', age: 30, status: true},
    {id: 2, name: 'kolya', age: 29, status: true},
    {id: 3, name: 'olya', age: 28, status: false}];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}];

function func(user, city){
    let mass=[];

    for(let i of user) {
       for(let j of city){
         let  xxx = {...i, ...j}
           if(xxx.id===j.user_id){
               mass.push(xxx)
           }
       }
    }
    console.log(mass)
}
func(usersWithId, citiesWithId);*/

/* 46-87 Завдання
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

function func(rule){
    for(let i of arguments) {
       let wrap= document.createElement('div')
        document.body.appendChild(wrap)
        for(let j of i){
            let first=document.createElement('div');
            wrap.appendChild(first)
            let second=document.createElement('h2');
            let second2=document.createElement('p');
            first.appendChild(second)
            first.appendChild(second2)
            second.innerText=j.title
            second2.innerText=j.body
        }
    }
}
func(rules)*/

/*Додаткове 3
let mass=[1,3, ['Hello, World', [9,6,1]], ['oops'], 9];
console.log(mass.flat(2))*/