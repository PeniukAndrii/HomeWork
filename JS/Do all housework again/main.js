/* Task 1 120-126
let kek=prompt('Choose color:Green Yellow Red')
kek==='Green'? console.log('idi') : kek==='Yellow'? console.log('SHdi') : console.log('STOY!')*/

/* Task 2 7-8 Завдання
for(let i=0;i<10; i++){
    let div=document.createElement('div')
    document.body.appendChild(div)
    div.innerText="ffa"+i
}*/

/*  14-16 Завдання
let mass=[12312, '321312', false, '321', '321312', true, 21312 , 213, 312 ,23 ,false , true]
for(let i of mass) if(typeof i=="boolean") console.log(i)*/

/* 17 Завдання
let mass=[12312, '321312', false, '321', '321312', true, 21312 , 213, 312 ,23 ,false , true]
for(let i=0; i<mass.length; i++)console.log(mass[i])*/

/* 18-20 Завдання
for(let i=1;i<=100;i+=2){
    console.log(i)
    document.write(i+' ')
}*/

/* 21 Завдання
for(let i=1;i<=100;i++)if (!(i%2))console.log(i);*/

/* 24 Завдання
for(let i=0; i<2; i++) for(let j=0; j<60; j++) console.log(i, j)*/

/* 25 Завдання
for(let i=0; i<=3; i++) {
    for (let j = 0; j < 60; j++) {
        if (!(i===3&&j===20)){
            for (let k = 0; k < 60; k++) console.log(i, j, k)
        }
        else {break}
    }
}*/

/* 27-30 Завдання
let mass=['a','b','c']
for(let i=0; i<1; i++) console.log(mass[i++]+mass[i++]+mass[i++])*/

/* Доп завдання Реалізувати друкарську машинку.
function func(Text){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(document.write(Text))
        }, Math.floor(Math.random()*1000))
    })
}
async function func2(text) {
        for (let i of text) {
            await func(i)
        }
}
func2('Hello World')*/
