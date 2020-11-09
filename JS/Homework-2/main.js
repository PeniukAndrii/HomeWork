/* 1-6 Завдання
et mas= [100, 200, 300 ,400 ,500, "keky", "seky", "teky", "kymeky", "steky", true, false, false, true, true];
console.log(mas);
console.log(mas[2]);*/

/* 7 Завдання
for (let i=0; i<10; i++){
    document.write("<div>ТУТ МОГЛА БУТИ ВАША РЕКЛАМА</div>")
}*/

/* 8 Завдання
let mass=["kek ", "keke ", "kekeke ", "dada ", "neeee ", "nene ", "cikli-klas ", "jaja ", "jajjaa " , "xxx "];
for(let i=0; i<10; i++){
    document.write(`<div>dada ${mass[9]} fsafa</div>`);
}*/

/* 9 Завдання
let i=0;
while (i<20){
    document.write("<h1>ZAGOLOVOOOOK</h1>");
    i++;
}*/

/* 10 Завдання
let i=0;
let mass=["kek ","tapok ","tak-dali ", "dada "];
while(i<20){
    document.write(mass[3]);
    i++;
}*/

/* 11 Завдання
let mass=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i of mass){
    console.log(i);
}
*/

/* 12 Завдання
let mass=["yes", "ynn", "text", "da", "nice", "dada", "saaaa", "hagas", "ggggg", "gh"];
for(let i of mass){
    console.log(i);
}*/

/* 13 Завдання
let mass=["yes", true, "text", 112, "nice", false, "saaaa", 1111, "ggggg", 111];
for(let i of mass){
    console.log(i);
}*/

/* 14 Завдання
let mass=[213, "da", false, true, true, 12312, "lol", 151, 2312, "dada"];

for (let i=0; i < mass.length; i++){
    if (typeof mass[i]==="boolean") {
        console.log(mass[i]);
    }
}*/

/* 15 Завдання
let mass=[213, "da", false, true, true, 12312, "lol", 151, 2312, "dada"];

for(let i=0; i<mass.length; i++){
    if(typeof mass[i]==="number"){
        console.log(mass[i]);
    }
}*/

/* 16 Завдання
let mass=[213, "da", false, true, true, 12312, "lol", 151, 2312, "dada"];

for(let i=0; i<mass.length; i++){
    if(typeof mass[i]==="string"){
        console.log(mass[i]);
    }
}*/

/* 17 Завдання
let mass=[1, "2ss", false, true, 5, "6ss", 7, 8, "9ss",false];

for(let i=0; i<mass.length; i++){
    document.write(mass[i]+"<hr>");
}*/

/* 18-19 Завдання
for(let i=1; i<=100; i++){
    document.write(i, "yakas infa<br>" );
    console.log(i, "yakas infa");
}*/

/* 20 Завдання
for (let i=1; i<=100; i+=2){
    document.write(i, "kek<br>");
    console.log(i, "kek");
}*/

/* 21-22 Завдання
for(let i=0; i<=100; i++){
    if (i%2===0){
        console.log(i);
        document.write(i, "<br>");
    }
}

for(let i=0; i<=100; i+=2) {
    console.log(i);
    document.write(i, "<br>");
}
 */

/* 23 Завдання
for(let i=0; i<=100; i++){
    if(i%2){
        document.write(i, "<br>");
        console.log(i);
    }
}*/

/* 24 Завдання
for(let i=0; i<2; i++) {
    for (let j = 0; j < 60; j++) {
        console.log(i, j);
        if (j <= 59) {
            document.write(`${i} ${j}<br>`);
            if (j >= 59) {
                document.write("<hr>");
            }
        }
    }
}*/

/* 25 Завдання
for(let i = 0; i <= 2; i++){
    for(let j = 0; j < 60; j++){
        for(let k = 0; k < 60; k++){
            if(i<=2 && j<20)
            console.log(i, j, k)
         }
    }
}*/

/* Доп завдання 1
let mass=['a', 'b', 'c'];

for(let i=0; i<mass.length; i++){
    document.write(mass[i]);
}*/

/* Доп завдання 2
let mass=[ 'a', 'b', 'c'];
let i=0;
while(i<mass.length) {
    document.write(mass[i]);
    i++
}*/

/* Доп завдання 3-4
let mass=['a','b','c'];
for(let i of mass){
    document.write(i);
}*/

/* Завданння на 37 стрічці
let mass=['a', 'b', 'c'];
let arr=[[1],[2],[3]];
for(let i=0; i<1; i++){
    mass.push(arr);
    document.write(mass);
}*/

/* Завдання 55-56
let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=1;
while(i<=1){
    document.write(mass)
    i++;
}*/

/* Завданяя 57
let mass=[2,17,13,6,22,31,45,66,100,-18];
for(let i=0; i<mass.length; i++){
    document.write(mass[i]," ");

}*/

/* Завдання 58
let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<=mass.length) {
    if (i % 2) {
        document.write(i, "<br>");
        console.log(i);
    }
    i++
}*/

/* Завдання 59
let mass=[2,17,13,6,22,31,45,66,100,-18];

for(let i=0; i<=mass.length; i++){
    if(i%2){
        document.write(i, "<br>");
    }
}
*/

/* Завдання 60
let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<=mass.length){
    if(i%2===0){
        document.write(i);
    }
    i++;
}
*/

/* Завдання 61
let mass=[2,17,13,6,22,31,45,66,100,-18];

for(let i=0;i<=mass.length; i++){
    if (i%2===0){
        document.write(i, "<br>");
    }
}
*/

/* Завдання 62
let mass=[2, 17,13,6,22,31,45,66,100,-18];

for(let i=0; i<=mass.length; i++){
    if (mass[i] % 3 === 0){
        mass[i]='okten';
        document.write(mass[i], "<br>");
    }
    else if(mass[i] % 3 !== 0) {
        document.write(mass[i], "<br>");
    }
}*/

/* Завдання 63
let mass=[2,17,13,6,22,31,45,66,100,-18];
for(let i = mass.length; i>-1; i--){
    console.log(mass[i]);
}*/

/* Завдання 64-7
let mass=[2, 17,13,6,22,31,45,66,100,-18];

    for(let i=mass.length; i>-1; i--) {
        if (mass[i] % 3 === 0) {
            mass[i] = 'okten';
            document.write(mass[i], "<br>");
        } else if (mass[i] % 3 !== 0) {
            document.write(mass[i], "<br>");
        }
    }*/

/* Завдання 64-6
let mass=[2,17,13,6,22,31,45,66,100,-18];

for(let i=mass.length;i>-1; i--){
    if (i%2===0){
        document.write(i, "<br>");
    }
}*/

/* Завдання 64-5
let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=mass.length;
while(i>-1){
    if(i%2===0){
        document.write(i, "<br>");
    }
    i--;
}
*/

/* Завдання 64-4
let mass=[2,17,13,6,22,31,45,66,100,-18];

for(let i=mass.length; i>-1; i--){
    if(i%2){
        document.write(i, "<br>");
    }
}*/

/* Завдання 64-3
let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=mass.length;
while(i>-1) {
    if (i % 2) {
        document.write(i, "<br>");
        console.log(i);
    }
    i--
}*/

/* Завдання 64-2
let mass=[2,17,13,6,22,31,45,66,100,-18];
for(let i=mass.length-1; i>-1; i--){
    document.write(mass[i]," ");
}*/

/* Завдання 64-1
let mass=[2,17,13,6,22,31,45,66,100,-18];
let i=mass.length-1;
while(i>-1){
    document.write(mass[i], " ")
    i--;
}
*/

/* Завдання 68-1
let mass=[];
for(let i=0; i<=100; i++){
    mass[i]=[mass.length];
    if(mass[i]%2===0){
        document.write(mass[i], " ");
    }
}*/

/* Завдання 68-2
let mass=[];
for(let i=0; i<=100; i++){
    mass[i]=[mass.length];
    if(mass[i]%2!==0){
        document.write(mass[i], " ");
    }
}*/
