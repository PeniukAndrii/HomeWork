// TAST 2 CLASS WORK but from home)
/*  Class Work 37 Завдання
let mass=['a', 'b', 'c'];
for(let i=0; i<1;i++) {
    mass.push(1,2,3)
}
console.log(mass)
*/

/* 38 Завдання
let mass=[1, 2, 3];
let mass2=[];
for(let i=0;i<mass.length;i++){
    mass2.unshift(mass[i])
}
console.log(mass2)*/

/* 39 Завдання
let mass=[1, 2, 3];
for(let i=0; i<1;i++){
    mass.push(4,5,6)
}
console.log(mass)*/

/* 40 Завдання
let mass=[1, 2, 3];
for(let i=0; i<1;i++){
    mass.unshift(4,5,6)
}
console.log(mass)*/

/* 41 Завдання
let mass=['js', 'css', 'jq'];
let del=mass.shift()
console.log(del)*/

/* 42 Завдання
let mass=['js', 'css', 'jq'];
let poop=mass.pop()
console.log(poop)*/

/* 43 Завдання
let mass=[1, 2, 3, 4, 5];
let sli=mass.slice(3, 5);
console.log(sli)*/

/* 44 Завдання
let mass=[1, 2, 3, 4, 5];
let sli=mass.slice(0, 2);
console.log(sli);*/

/* 45 Завдання
let mass=[1, 2, 3, 4, 5];
mass.splice(1,2,)
console.log(mass)*/

/* 46 Завдання
let mass=[1, 2, 3, 4, 5];
mass.splice(3,0, 'a','b','c')
console.log(mass)*/

/* 47 Завдання
let mass= [1, 2, 3, 4, 5];
mass.splice(1,0,'a','b');
mass.splice(6,0,'c');
mass.splice(8,0,'e');
console.log(mass);*/

/* 48 Завдання
let rand=[]
for(let i=0;i<10;i++){
   let mass=Math.floor(Math.random() * (200 - 1) + 1);
    if(mass%2===0){
        rand.push(mass)
    }
}
console.log(rand);*/

/* 49 Завдання
let mass=[12,67,43,86,24,87,4,5,76,2,11,41,65,42];
let copy=[];
for(let i of mass){
    copy.push(i)
}
console.log(copy)*/

/* 50 Завдання
let mass=[12,67,43,86,24,87,4,5,76,2,11,41,65,42];
let copy=[];
for(let i=0;i<mass.length;i++){
    copy[i]=mass[i];
}
copy[0]=10 // перевірка чи скопіювало правильно...
console.log(copy)
console.log(mass)*/

/* 71-73 Завдання
let mass=[];
for(let i=1;i<=100;i++){
    if(i%2===0){
        mass.push(i)
    }
}
console.log(mass)
*/

/* 74 Завдання
let mass=[];
for(let i=1;i<=100;i++){
    if(i%2!==0){
        mass.push(i)
    }
}
console.log(mass)*/

/* 75-76 Завдання
let mass=[];
for(let i=0;i<20; i++){
    mass[i]=Math.floor(Math.random() * (732 - 8) + 8)
}
console.log(mass)*/

/* 75-82 Завдання
let mass=[];
let mass2=[];
for(let i=0;i<20; i+=3){
    mass[i]=Math.floor(Math.random() * (732 - 8) + 8)
    if(mass[i]%2===0){
        mass2.push(mass[i])
    }
}
console.log(mass2)*/

/* 83 Завдання
let mass=[23,2,56,54,55,2,4,45,23,4,2,3,4];
for(let i=0;i<mass.length;i++){
    if(mass[i+1]%2===0){
        console.log(mass[i])
    }
}
*/

/* 84 Завдання
let mass=[100,250,50,168,120,345,188];
let sum=0;
for(let i=0;i<mass.length;i++){
    sum+=mass[i];
}
sum=sum/mass.length;
console.log(sum)*/

/* 86 Завдання
let mass=[];
let randMassX5=[];

for(let i=0;i<10;i++){
    mass[i]=Math.floor(Math.random() * (50 - 1) + 1)
    randMassX5.push(mass[i]*5)
}
console.log(mass);
console.log(randMassX5)*/

/* 87 Завдання
let mass=['12',1,3,4,5,['312'],{ffale:"afasf"},444,555,false];
let NumMass=[];
for(let i of mass){
    if(typeof i==='number'){
        NumMass.push(i)
    }
}
console.log(mass)
console.log(NumMass)*/

/*TASK 3 CLASS WORK(home)*/

/* 70 Завдання
let main=document.getElementById('main_header')
main.style.color='red';*/

/*71 Завдання
let ul=document.getElementsByTagName('ul');
for(let i of ul){
    i.style.width='400px'
}*/

/* 72 Завдання
let link=document.getElementsByClassName('linkList');
for(let i of link){
    i.style.width='50%';
}
*/

/* 73 Завдання
let text=document.getElementsByClassName('listElement2');
for(let i of text){
    i.innerHTML=""
}
*/

/* 74 Завдання
let li=document.getElementsByTagName('li');
for(let i of li){
    i.style.backgroundColor='black'
}*/

/* 75 Завдання
let TagA=document.getElementsByTagName('a');
for(let i of TagA){
    i.classList.add('anchor');
}
*/

/* 76 Завдання
let TagA=document.getElementsByTagName('a');
for(let i of TagA){
    if(i.innerText==='link3'){
        i.style.fontSize='40px'
    }
}*/

/* 77 Завдання
let TagA=document.getElementsByTagName('a');
for(let i of TagA) {
    i.classList.add(`element_${i.innerText}`)
}*/

/* 78 Завдання
let colors=prompt('color')
let subHeader=document.getElementsByClassName('sub-header');
for(let i of subHeader) {
    i.style.backgroundColor=colors
}*/

/* 79 Завдання
let colors=prompt('Input color');
let subHeader=document.getElementsByClassName('sub-header');
for(let i of subHeader) {
   if(i.innerText==='content 2 segment'){
       i.style.color=colors
   }
}*/

/* 80 Завдання
let texts=prompt('Input Text')
let contents=document.getElementsByClassName('content_1');
for(let i of contents){
    i.innerText=texts
}*/

/* 81 Завдання
let P=document.getElementsByTagName('p');
for(let i of P){
    i.style.padding='20px'
}*/

/* 82 Завдання
 texts=prompt('Input Text')
let text2=document.getElementsByClassName('text2');
for(let i of text2){
    i.innerText=texts
}*/

/* 121-123 Завдння
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
let wrap=document.createElement('div');
document.body.appendChild(wrap)
wrap.id='wrap';
for(let i of rules){
  let wrap2=document.createElement('div');
  wrap2.classList.add('rules')
  wrap.appendChild(wrap2)
    let h2=document.createElement('h2')
    let p=document.createElement('p')
    wrap2.appendChild(h2)
    wrap2.appendChild(p)
    h2.innerText=i.title
    p.innerText=i.body
}
*/









