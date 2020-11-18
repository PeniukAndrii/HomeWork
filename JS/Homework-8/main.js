/*1-3 Завдання
let textArea=document.createElement('textarea')
document.body.appendChild(textArea)

textArea.addEventListener('input',(ev)=>{
   localStorage.setItem('text',textArea.value)
})
textArea.value=localStorage.getItem('text')
*/

/* 5-8 Завдання
let form=document.createElement("form")
let inp4=document.createElement("input")
let inp5=document.createElement("input")
let inp6=document.createElement('textarea')
let BTN=document.createElement('button')

BTN.innerText='Почитити LocalStorage'
BTN.style="width:150px"
document.body.appendChild(form)
form.appendChild(inp4)
form.appendChild(inp5)
document.body.appendChild(inp6)


BTN.addEventListener('click',(ev)=>{
    localStorage.clear()
    document.location.reload()
})
function func2(key, index){
    key.addEventListener("input", (ev)=>{
        localStorage.setItem(`${index}`,key.value)
    })
    key.value=localStorage.getItem(`${index}`)
}
func2(inp4, 1)
func2(inp5, 2)
func2(inp6, 3)

function func3(INP){
    INP.setAttribute('type','submit')
    INP.setAttribute('type','radio')
    form.appendChild(INP)
}
let inp1=document.createElement("input")
let inp2=document.createElement("input")
let inp3=document.createElement("input")
func3(inp1)
func3(inp2)
func3(inp3)
form.appendChild(BTN)

inp1.addEventListener('click',(ev)=>{
    localStorage.setItem('btn1', `${inp1.checked}`)

})
inp2.addEventListener('click',(ev)=>{
    localStorage.setItem('btn2',`${inp2.checked}`)
})
inp3.addEventListener('click',(ev)=>{
    localStorage.setItem('btn3',`${inp3.checked}`)
})
if(localStorage.getItem('btn1')){
    inp1.setAttribute('checked',`${localStorage.getItem('btn1')}`)
}
if(localStorage.getItem('btn2')){
    inp2.setAttribute('checked',`${localStorage.getItem('btn2')}`)
}
if(localStorage.getItem('btn3')){
    inp3.setAttribute('checked',`${localStorage.getItem('btn3')}`)
}
*/

/* 10-12 Завдання
let form=document.createElement('form')
let btn = document.createElement('button')
let btn2 = document.createElement('button')
let btn3 = document.createElement('button')
let btn4 = document.createElement('button')
btn.innerText='Save'
btn2.innerText='Delete LocalStorage'
btn3.innerText='prev'
btn4.innerText='next'
btn4.style='margin-left:100px'
let textArea = document.createElement('textarea')
textArea.style="width:176px; height:70px"
function func(elem){
    for(let i of elem)document.body.appendChild(i)
}
func([btn3, btn4, form, btn, btn2])
form.appendChild(textArea)
let i=0;
btn.addEventListener('click',()=>{
    localStorage.setItem(`${i++}`,textArea.value)
})
btn2.addEventListener('click',()=>{
    localStorage.clear()
})
btn3.addEventListener('click',()=>{
    if(i>0){
        textArea.value=localStorage.getItem(`${i-=1}`)}
    else{textArea.value='LAST HISTORY, GO NEXT'}
})
btn4.addEventListener('click',()=>{
    textArea.value=localStorage.getItem(`${i++}`)
})*/

/* 14-18 Завдання
let wrap=document.createElement('div')
let btn=document.createElement('button')
let btn5=document.createElement('button')
let btn2=document.createElement('button')
document.body.appendChild(wrap)
document.body.appendChild(btn)
document.body.appendChild(btn5)
btn.innerText='Clear Local'
btn5.innerText='removeContanct'
btn.addEventListener("click", ()=>{
    localStorage.clear()
})
document.body.appendChild(btn2)
btn2.innerText='Створити контакт'
let P=[]

let inp=[]
for (let i=0; i<6;i++){
    P[i]=document.createElement('div')
    inp[i]=document.createElement('input')
    wrap.appendChild(P[i])
    wrap.appendChild(inp[i])
    inp[i].addEventListener('input',()=>{})
}
P[0].innerText='ФИО'
P[1].innerText='Номер'
P[2].innerText='Почта'
P[3].innerText='Фирма'
P[4].innerText='Отдел'
P[5].innerText='День рождения'

let i=0;
btn2.addEventListener("click", ()=>{
    localStorage.setItem(`${i++}`,`${JSON.stringify([
        inp[0].value,
        inp[1].value,
        inp[2].value,
        inp[3].value,
        inp[4].value,
        inp[5].value,
    ])}`)
})

let btn3=document.createElement('button')
let btn4=document.createElement('button')
btn3.innerText='Prev'
btn4.innerText='Next'
document.body.appendChild(btn3)
document.body.appendChild(btn4)

let kek;
for(let h=0; h<6; h++){
    kek=JSON.parse(localStorage.getItem(`${i}`))
    inp[h].value=kek[h]
}
btn3.addEventListener('click',()=>{
    i--
    for(let j=0; j<6; j++){
        kek=JSON.parse(localStorage.getItem(`${i}`))
        inp[j].value=kek[j]
    }
})
btn4.addEventListener('click',()=>{
    i++
    for(let j=0; j<6; j++){
        kek=JSON.parse(localStorage.getItem(`${i}`))
        inp[j].value=kek[j]
    }
})
btn5.addEventListener('click',()=>{
    localStorage.removeItem(`${i}`)
    i++
    for(let k=0; k<6; k++){
        kek=JSON.parse(localStorage.getItem(`${i}`))
        inp[k].value=kek[k]
    }
})
*/
