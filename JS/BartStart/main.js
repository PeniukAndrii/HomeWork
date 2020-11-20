let timer=document.getElementById('fake-timer')
let fon=document.getElementById('fons')


timer.innerText='11хв'
let minute=11;
setInterval(()=>{
    if(minute===0){
        timer.innerText='Початок!'
        return;
    }
    minute--
    timer.innerText=`${minute}хв`

},60000)

let i=999
setInterval(()=>{
if(i===500){
    i=999
}
    fon.style.transform = `rotate(0.${i}turn)`
    i--
}, 20)
