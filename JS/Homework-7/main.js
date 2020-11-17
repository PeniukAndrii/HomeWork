/* 1 Завдання
let main=document.createElement('div')
let text=document.createElement('div')
let bottom=document.createElement('div')
document.body.appendChild(main)
main.appendChild(text)
main.appendChild(bottom)

text.setAttribute('id', 'texts')
main.addEventListener('click',(ev)=>{
    if(text.hasAttribute('id')){
        text.style.display='none'
    }
})

main.style.height='1000px';
main.style.width='100%'

text.style.backgroundColor='pink'
text.style.width="800px"
text.style.height="200px"

bottom.style.marginTop='100px'
bottom.style.backgroundColor='red'
bottom.style.width="500px"
bottom.style.height="150px"
bottom.style.borderRadius='10px';*/

/* 2-3 Завдання
let main=document.createElement('div')
let bottom=document.createElement('div')
document.body.appendChild(main)
main.appendChild(bottom)

main.addEventListener('click',(ev)=>{
    bottom.style.display='none'
})

main.style.height='1000px';
main.style.width='100%'

bottom.style.marginTop='100px'
bottom.style.backgroundColor='red'
bottom.style.width="500px"
bottom.style.height="150px"
bottom.style.borderRadius='10px';*/

/* 4-5 Завдання
let inp=document.createElement("input");
let input =document.createElement("input");
document.body.appendChild(inp);
document.body.appendChild(input);
inp.setAttribute('type','number');
input.setAttribute('type','button');
input.setAttribute('value','Підтвердити');
input.addEventListener("click", (ev)=>{
        if(inp.value<18){
            alert('you age<18')}
        else alert('GOOD')
})*/

/* 6-7 Завдання
let menu=document.createElement('div');
document.body.appendChild(menu);
let lift=document.createElement('div');
document.body.appendChild(lift);
let back=document.createElement('div');
lift.innerText='МЕНЮ КРЧ'
lift.appendChild(back);
lift.style.backgroundColor='black';
lift.style.width='400px';
lift.style.height='1000px';
lift.style.float='right';
lift.style.display='none';
lift.style.color='white'

menu.style.backgroundColor='red';
menu.style.width='100px';
menu.style.height='100px';
menu.style.float='right';

menu.addEventListener('click',(ev)=>{
    lift.style.display='block'
    menu.style.display='none'
});
lift.addEventListener('mouseleave', (ev)=>{
    lift.style.display='none';
    menu.style.display='block'
})*/

/* 8-11 Завдання Не впевнений в правильності
let comment=[{title : 'lorem', body:'body1'},
    {title : 'lorem', body:'body2'},
    {title : 'lorem2312m', body:'body3'},
];
let wrapper=document.createElement("div")
document.body.appendChild(wrapper);
let inp=document.createElement("input");
let inp2=document.createElement("input");
let inp3=document.createElement("input");
let inp4=document.createElement("input");
inp.setAttribute('type', 'button')
inp.setAttribute('value', 'Скрити Боди 1')
inp2.setAttribute('type', 'button')
inp2.setAttribute('value', 'Скрити Боди 2')
inp3.setAttribute('type', 'button')
inp3.setAttribute('value', 'Скрити Боди 3')
inp4.setAttribute('type', 'button')
inp4.setAttribute('value', 'Вернути Закриті Боді')
for (let i=0;i<comment.length;i++){
    let titles=document.createElement('div');
    let bodys=document.createElement('div');
    let elem=document.createElement('div');
    wrapper.appendChild(elem)
    elem.appendChild(titles)
    elem.appendChild(bodys)
    titles.innerText=comment[i].title
    bodys.innerText=comment[i].body
    bodys.setAttribute(`kek${i}`,'')
    inp.addEventListener('click',(ev)=>{
        if(bodys.hasAttribute('kek0')){
            bodys.style.display='none'
        }
    });
    inp2.addEventListener('click',(ev)=>{
        if(bodys.hasAttribute('kek1')){
            bodys.style.display='none'
        }
    })
    inp3.addEventListener('click',(ev)=>{
        if(bodys.hasAttribute('kek2')){
            bodys.style.display='none'
        }
    })
    inp4.addEventListener('click',(ev)=>{
        if(bodys.style.display==='none'){
            bodys.style.display='block'
        }
    })
}
wrapper.appendChild(inp)
wrapper.appendChild(inp2)
wrapper.appendChild(inp3)
wrapper.appendChild(inp4)*/

/* 12-15 Завдання
let wrapper=document.createElement("div")
document.body.appendChild(wrapper);
let form=document.createElement("form")
let form2=document.createElement("form2")
let input1=document.createElement("input")
let input2=document.createElement("input")
let button=document.createElement("input")
wrapper.appendChild(form)
wrapper.appendChild(form2)
wrapper.appendChild(button)
button.style.padding='10px 100px'
button.style.margin='30px'
form.appendChild(input1)
form.appendChild(input2)
input1.setAttribute('type','text')
input2.setAttribute('type','text')
button.setAttribute('type','submit')
button.addEventListener('click',(ev)=>{
    console.log(input1.value)
    console.log(input2.value)
})

*/

/* 17-20 Завдання
function func(str, yach, elem){
    let kek=document.createElement(elem)
document.body.appendChild(kek)
    for (let i=0;i<str;i++){
        let trs=document.createElement('tr')
        kek.appendChild(trs)
            for (let i=0;i<yach;i++){
                let td=document.createElement('td')
                trs.appendChild(td)
            }
    }
}
func(4,8,'div')*/

/* 23-25 Завдання
let wrapper=document.createElement("div")
document.body.appendChild(wrapper);
let form=document.createElement("form")
let form2=document.createElement("form2")
let form3=document.createElement("form3")
let input1=document.createElement("input")
let input2=document.createElement("input")
let input3=document.createElement("input")
let button=document.createElement("input")
wrapper.appendChild(form)
wrapper.appendChild(form2)
wrapper.appendChild(button)
wrapper.appendChild(form3)
button.style.padding='10px 100px'
button.style.margin='30px'
form.appendChild(input1)
form.appendChild(input2)
form.appendChild(input3)
input1.setAttribute('type','number')
input2.setAttribute('type','number')
input3.setAttribute('type','text')
button.setAttribute('type','submit')
button.addEventListener('click',(ev)=>{
    func(input1.value, input2.value, input3.value)
})
function func(input1,input2,input3) {
    let kek = document.createElement(`${input3}`)
    document.body.appendChild(kek)
    for (let i = 0; i < input1; i++) {
        let trs = document.createElement('tr')
        kek.appendChild(trs)
        for (let i = 0; i < input2; i++) {
            let td = document.createElement('td')
            trs.appendChild(td)
        }
    }
}
*/

/* 26-27 Завдання  10 Костилів з 10
let wrapper=document.createElement('div');
let block1=document.createElement('div');
document.body.appendChild(wrapper);
wrapper.appendChild(block1)

let form=document.createElement("form")
let button=document.createElement("input")
button.setAttribute('type','submit')
let button2=document.createElement("input")
button2.setAttribute('type','submit')
block1.appendChild(form)
block1.appendChild(form)
block1.style.width='600px'
block1.style.backgroundColor='black'
block1.style.display='flex'
block1.style.flexDirection='column'
block1.style.flexWrap='nowrap'
button.style.float='left'

button.style.marginTop='130px'
button.style.marginRight='20px'
form.appendChild(button2)

button2.style.float='right'
button2.style.marginTop='130px'

let ul=document.createElement('ul')
let lis1=document.createElement("li")
let lis2=document.createElement("li")
let lis3=document.createElement("li")
ul.style.width='500px'

ul.appendChild(button)
ul.appendChild(button2)
ul.appendChild(lis1)
ul.appendChild(lis2)
ul.appendChild(lis3)
ul.style.listStyle='none'
block1.appendChild(ul)
let img=document.createElement('img')
img.setAttribute('src','https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg')
img.style.width='300px';
img.style.height='300px';
img.style.float='left'

let img2=document.createElement('img')
img2.setAttribute('src','https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.png.img.png')
img2.style.width='300px';
img2.style.height='300px';
img2.style.float='left'

let img3=document.createElement('img')
img3.setAttribute('src','https://image.shutterstock.com/image-illustration/tropical-island-3d-illustration-260nw-743218933.jpg')
img3.style.width='300px';
img3.style.height='300px';
img3.style.float='left'

lis1.appendChild(img)
lis2.appendChild(img2)
lis3.appendChild(img3)
lis2.style.display='none'
lis3.style.display='none'
lis1.style.display="block"

button.addEventListener('click',(ev)=>{
    ev.preventDefault()
    if(lis1.style.display==='block'){
        lis1.style.display='none'
        lis2.style.display='block'
    }
    else if(lis2.style.display==='block'){
        lis2.style.display='none'
        lis3.style.display='block'
    }
    else if(lis3.style.display==='block'){
        lis3.style.display='none';
        lis1.style.display='block'
    }
})
button2.addEventListener('click',(ev)=>{
    ev.preventDefault()
    if(lis2.style.display==='block'){
        lis2.style.display='none'
        lis1.style.display='block'
    }
    else if(lis3.style.display==='block'){
        lis3.style.display='none'
        lis2.style.display='block'
    }
    else if(lis1.style.display==='block'){
        lis1.style.display='none';
        lis3.style.display='block'
    }
})*/

/* 30-35 Завдання
let mass=['blat']
let form=document.createElement('form');
let input=document.createElement('input');
let button=document.createElement('input');
button.setAttribute('type','button');
button.setAttribute('value','Перевірити');
document.body.appendChild(form);
form.appendChild(input)
form.appendChild(button)

input.setAttribute('type','text');
input.setAttribute('value','')
button.addEventListener('click',(ev)=>{
    for(let i of mass){
        if(input.value===i){
            alert('NONO-KAKA')
        }
    }
})*/

/* 37-41 Завдання
let mass=['blat', 'skyka', 'pisto']
let form=document.createElement('form');
let input=document.createElement('input');
let button=document.createElement('input');
button.setAttribute('type','button');
button.setAttribute('value','Перевірити');
document.body.appendChild(form);
form.appendChild(input)
form.appendChild(button)

input.setAttribute('type','text');
input.setAttribute('value','')
button.addEventListener('click',(ev)=>{
    for(let i of mass){
        if(input.value.includes(i)){
            alert('NONO-KAKA')
        }
    }
})
*/

/* 45-46 Завдання
let H2=document.getElementsByTagName('h2');
let wrap=document.getElementById('wrap');
let contents=document.getElementById('content');
let block=document.createElement('div');

for(let i=0; i<H2.length;i++){
    let divs=document.createElement('div')
    let a=document.createElement('a')
    a.setAttribute('href',`#${[i]}`);
    contents.appendChild(divs)
    a.innerHTML=H2[i].innerText
    divs.appendChild(a)
    H2[i].setAttribute('id',`${[i]}`)
}
contents.style.float='right'
*/

/* 48-66 Завдання
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let wrapper=document.createElement('div');
let form=document.createElement('form');
let input=document.createElement('input');
let input2=document.createElement('input');
let input3=document.createElement('input');
let input4=document.createElement('input');
document.body.appendChild(form);
form.appendChild(input);
form.appendChild(input2);
form.appendChild(input3);
form.appendChild(input4);
input.setAttribute('type','checkbox');
input2.setAttribute('type','checkbox');
input3.setAttribute('type','checkbox');
input4.setAttribute('type','button');x
input4.setAttribute('value','Filter this');
input4.style='width : 100px; margin-left: 10px '


input4.addEventListener('click',(ev)=>{
    if (input.checked){
        usersWithAddress.filter((value)=>{
            if(value.status===false){
                let stat=document.createElement('p');
                stat.innerText=${value.id} ${value.name} ${value.age} ${value.status}  ${value.address.city} ${value.address.street} ${value.address.nu}
                    wrapper.appendChild(stat);
            }
        })
    }
    if (input2.checked) {
        usersWithAddress.filter((value)=>{
            if(value.age>=29){
                let stat=document.createElement('p');
                stat.innerText=${value.id} ${value.name} ${value.age} ${value.status}  ${value.address.city} ${value.address.street} ${value.address.nu}
                    wrapper.appendChild(stat);
            }
        })
    }
    if (input3.checked) {
        usersWithAddress.filter((value)=>{
            if(value.address.city==='Kyiv'){
                let stat=document.createElement('p');
                stat.innerText=${value.id} ${value.name} ${value.age} ${value.status}  ${value.address.city} ${value.address.street} ${value.address.nu}
                    wrapper.appendChild(stat);
            }
        })
    }
})
document.body.appendChild(wrapper);*/

/* ------------------ не зробив ше
let H2=document.getElementsByTagName('h2')
let divs=document.getElementsByTagName('div')
let p=document.getElementsByTagName('p')
let H1=document.getElementsByTagName('h1')


let form=document.createElement('form');
let but1=document.createElement('input');
let but2=document.createElement('input');
but1.setAttribute('type','button');
but2.setAttribute('type','button');
document.body.appendChild(form)
form.appendChild(but1)
form.appendChild(but2)

function func(elem1){
    but2.onclick = (ev) => {
        console.log(elem1.children)
    }


}
func(divs)*/


/* ШЕ НЕ ЗРОБИВ
let p=document.getElementsByTagName('p');
for(let i of p){
    i.onmouseup=function () {
        window.getSelection().toString()
    }
}*/










