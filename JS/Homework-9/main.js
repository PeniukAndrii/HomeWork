/* На Колбеках
function myDay(pasta, day){
    console.log('Проснувся, посміхнувся');
    console.log('...')

    setTimeout(()=>{
        if(!pasta){
            day('Нема пасти',null);
            return;
        }
        day(null, 'Почистив зуби');

    }, 600)
}
function TakeWear(wear, cb){
    setTimeout(()=>{
        if(!wear){
            cb('Вкрали Одяг, біда',null);
        }
        cb(null, 'Одягнувся, йоу репчік');
    }, 550)
}
function goToBus(ticket,cb){
    setTimeout(()=>{
        if(!ticket){
            cb('Пішов купляти квиток...ПОТРАЧЕНО', null);
        }
        cb(null, 'Сів на маршутку');
    }, 300)
}
function getOutInTheTime(time,cb){
    setTimeout(()=>{
        if(time>200){
            cb('Біда, ти пропустив зупинку...',null);
        }
        cb(null, 'Вийшов з маршутки вчасно');
    },100)
}
function GoToATB(moneyOnCard, cb){
    setTimeout(()=>{
        if(moneyOnCard<50){
            cb('Зайшов в АТБ, замало грошей щоб купити енергос',null);
        }
        cb(null,'Зайшов в АТБ, купив енергос')
    }, 900)
}
function GoStudy(time,cb){
    setTimeout(()=>{
        if(time>100){
            cb('Запізнився....',null);
        }
        cb(null,'Пішов вчитись')
    }, 345)
}
function BreakStudy(time,cb){
    setTimeout(()=>{
        if(time<10){
            cb('Вчишся 10 годин, яке кушать...',null)
        }
        cb(null,'Зробив Обідю перерву)')
    },365)
}
function BrakeGoEat(eat,cb){
    setTimeout(()=> {
        if (!eat) {
            cb('Немає їжі((', null)
        }
        cb(null, 'Смачно покушал)-_-')
    },123)
}
function GoStudyAgain(time,cb){
    setTimeout(()=>{
        if(time>2){
            cb('Переїв, і помер.',null)
        }
        cb(null,'Вернувся до навчання')
    },976)
}
function GoHome(time,cb){
    setTimeout(()=>{
        if(time<18){
            cb('Ще вчусь...', null)
        }
        cb(null,'Валю додому')
    },621)
}
myDay(true,(err,data)=>{
    if (err) {
        console.log(`Паходу, ${err} треба йти в магазин...`);
        return;
    }
       console.log(data);
       console.log('...');

           TakeWear(true,(err, data)=>{
                if(err){
                    console.log(err);
                    return;
                }
               console.log(data);
               console.log('...');

               goToBus(true,(err, data)=>{
                   if(err){
                       console.log(err);
                       return;
                   }
                   console.log(data);
                   console.log('...');

                   getOutInTheTime(199,(err,data)=>{
                       if(err){
                           console.log(err);
                           return;
                       }
                       console.log(data);
                       console.log('...');

                       GoToATB(100,(err,data)=>{
                           if(err){
                               console.log(`Недорахував${err}`);
                               return;
                           }
                           console.log(data);
                           console.log('...');

                           GoStudy(90,(err,data)=>{
                               if(err){
                                   console.log(err);
                                   return;
                               }
                               console.log(data)
                               console.log('...');

                               BreakStudy(11,(err,data)=>{
                                   if(err){
                                       console.log(err);
                                       return;
                                   }
                                   console.log(data);
                                   console.log('...');

                                       BrakeGoEat(true,(err,data)=>{
                                       if(err){
                                           console.log(err);
                                           return;
                                       }
                                       console.log(data);
                                       console.log('...');

                                        GoStudyAgain(1,(err,data)=>{
                                            if(err){
                                                console.log(err);
                                                return;
                                            }
                                            console.log(data);
                                            console.log('...');
                                            GoHome(19,(err,data)=>{
                                                if(err){
                                                    console.log(err);
                                                    return;
                                                }
                                                console.log(data);
                                                console.log('......................................');
                                            })
                                        })
                                   })
                               })
                           })
                       })
                   })
               })
           })
})*/

/* На промисах
function myDay(pasta) {
    return new Promise((resolve, reject) => {
        console.log('Проснувся, посміхнувся');
        console.log('...')
        setTimeout(() => {
            if (!pasta) {
            reject('Нема пасти');
            }
            resolve('Почистив зуби');
        }, 600)
    })
}

function TakeWear(wear){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!wear) {
            reject('Вкрали Одяг, біда');
            }
            resolve('Одягнувся, йоу репчік');
        }, 550)
    })
}
function goToBus(ticket){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(!ticket){
        reject('Пішов купляти квиток...ПОТРАЧЕНО');
        }
        resolve('Сів на маршутку');
    }, 300)
    })
}
function getOutInTheTime(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 200) {
            reject('Біда, ти пропустив зупинку...');
            }
            resolve('Вийшов з маршутки вчасно');
        }, 100)
    })
}
function GoToATB(moneyOnCard){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moneyOnCard < 50) {
            reject('Зайшов в АТБ, замало грошей щоб купити енергос');
            }
            resolve( 'Зайшов в АТБ, купив енергос')
        }, 900)
    })
}
function GoStudy(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 100) {
            reject('Запізнився....');
            }
            resolve('Пішов вчитись')
        }, 345)
    })
}
function BreakStudy(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 10) {
            reject('Вчишся 10 годин, яке кушать...')
            }
            resolve('Зробив Обідю перерву)')
        }, 365)
    })
}
function BrakeGoEat(eat){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!eat) {
            reject('Немає їжі((')
            }
            resolve( 'Смачно покушал)-_-')
        }, 123)
    })
}
function GoStudyAgain(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 2) {
            reject('Переїв, і помер.')
            }
            resolve('Вернувся до навчання')
        }, 976)
    })
}
function GoHome(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 18) {
            reject('Ще вчусь...')
            }
            resolve( 'Валю додому')
        }, 621)
    })
}
myDay(true)
 .then(pasta=>{
     console.log('Почистив зуби');
     console.log('...');
     return TakeWear(pasta);
 })
 .then(value => {
     console.log(value);
     console.log('...');
     return goToBus(true)
 })
 .then(value => {
     console.log(value)
     console.log('...');
     return getOutInTheTime(190)
 })
 .then(value => {
     console.log(value)
     console.log('...');
     return GoToATB(51)
 })
 .then(value => {
     console.log(value)
     console.log('...');
     return GoStudy(56)
 })
 .then(value => {
     console.log(value)
     console.log('...');
     return BreakStudy(11)
 })
 .then(value => {
    console.log(value)
    console.log('...');
    return BrakeGoEat(true)
 })
 .then(value => {
     console.log(value)
     console.log('...');
     return GoStudyAgain(1)
 })
 .then(value => {
     console.log(value)
     console.log('...');
     return GoHome(19)
 })
 .then(value =>{
     console.log(value)
     console.log('...............');
 })
 .catch(reason => {
     console.log(reason)
 })
.finally(()=>{
    console.log('Кінець')
})*/
