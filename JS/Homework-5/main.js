/* 1-70 Стрічка
function Tag(title, action, attrs){
    this.titleTag=title;
    this.actionTag=action;
    this.attrsTag=attrs;
}
/!*class Tag{
    constructor(title,action,attrs){
        this.titleTag=title;
        this.actionTag=action;
        this.attrsTag=attrs;
    }
}*!/
let tagA= new Tag('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш',
        href:'Задает адрес документа, на который следует перейти.'}]);
let tagDiv=new Tag('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.' ,
    [{align:'Задает выравнивание содержимого тега <div>.',title:'Добавляет всплывающую подсказку к содержимому.'}]);
let tagH1=new Tag('<h1>', 'Tег <h1> представляет собой наиболее важный заголовок первого уровня',
    [{align: 'Определяет выравнивание заголовка.'}]);
let tagSpan=new Tag('<span>','Тег <span> предназначен для определения строчных элементов документа.',
    [{defolt:'Для этого тега доступны универсальные атрибуты и события.'}]);
let tagInput=new Tag('<input>','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    [{accept: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
        accesskey: 'Переход к элементу с помощью комбинации клавиш.'}]);
let tagForm=new Tag('<form>','Тег <form> устанавливает форму на веб-странице.',
    [{action:'Адрес программы или документа, который обрабатывает данные формы.',name:'Имя формы.'}]);
let tagOption=new Tag('<option>','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    [{disabled:'Заблокировать для доступа элемент списка.',label:'Указание метки пункта списка.'}]);
let tagSelect=new Tag('<select>','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
    [{size:'Количество отображаемых строк списка.',tabindex:'Определяет последовательность перехода между элементами при нажатии на клавишу Tab'}])
console.log(tagA);
console.log(tagDiv);
console.log(tagH1);
console.log(tagSpan);
console.log(tagInput);
console.log(tagForm);
console.log(tagOption);
console.log(tagSelect);*/

/* 75-80 Cтрічка
let car={
    Model:'Tesla',
    maker:'TeslaMotors',
    year:2019,
    maxSpeed:300,
    value:'electric',
    drive(){
        console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`)
    },
    info(){
        console.log(this)
    },
    increaseMaxSpeed (newSpeed){
        car.maxSpeed=newSpeed;
    },
    changeYear (newValue){
        car.year=newValue;
    },
    addDriver (driver){
        car['driver'] = driver;
    }
}
car.addDriver({name:'Oleg',age:20})
car.increaseMaxSpeed(400);
car.changeYear(2020);
car.info();
car.drive();*/

/* 85-90 Cтрічка
function Car(Model,maker,year,maxSpeed,value){
    this.Model=Model;
    this.maker=maker;
    this.value=value;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.drive=function(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info=function(){
        console.log(this);
    }
    this.increaseMaxSpeed=function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changeYear=function(newValue){
        this.year=newValue;
    }
    this.Driver=function(driver){
        this.Driver=driver;
    }



}
let Audi=new Car('A4','VAG',2019,250,2);
Audi.Driver({name:'Roman',age:25})
Audi.changeYear(2020)
Audi.increaseMaxSpeed(300)
Audi.info()
Audi.drive()*/

/* 94-99 Стрічка
class Car{
    constructor(Model,maker,year,maxSpeed,value) {
        this.Model=Model;
        this.maker=maker;
        this.value=value;
        this.year=year;
        this.maxSpeed=maxSpeed;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info(){
        console.log(this);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }
    changeYear(newValue){
        this.year=newValue;
    }
    Driver(driver){
        this.Driver=driver;
    }

}
let Audi=new Car('A4','VAG',2019,250,2);
Audi.Driver({name:'Roman',age:26});
Audi.changeYear(2021);
Audi.increaseMaxSpeed(400);
Audi.info();
Audi.drive();*/

/* 104-107 Cтрічка
class girl {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class prince{
    constructor(name,age,footSizeFind) {
        this.names=name;
        this.ages=age;
        this.footSizeFind=footSizeFind
    }
}
let Girls=[new girl('Ira',28,34),
new girl('Olga',20,37),
new girl('Vika',22,39),
new girl('Nastya',24,38),
new girl('Evelina',18,35),
new girl('Marta',31,40),
new girl('Galya',27,34.7),
new girl('Vira',21,34.4),
new girl('Katya',18,34.5),
new girl('Tanya',22,33)
]
let prince1=new prince('Andrii',19,37);
for(let i=0;i<Girls.length;i++){
    if(Girls[i].footSize===prince1.footSizeFind) {
        console.log(Girls[i])
    }
}*/

/* 112-117 Cтрічка
function Girl(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;

}
function Prince(name,age,footSizeFind){
        this.names=name;
        this.ages=age;
        this.footSizeFind=footSizeFind
}
let Girls=[new Girl('Ira',28,34),
    new Girl('Olga',20,37),
    new Girl('Vika',22,39),
    new Girl('Nastya',24,38),
    new Girl('Evelina',18,35),
    new Girl('Marta',31,40),
    new Girl('Galya',27,34.7),
    new Girl('Vira',21,34.4),
    new Girl('Katya',18,34.5),
    new Girl('Tanya',22,33)
]
let prince1=new Prince('Andrii',19,37);
for(let i=0;i<Girls.length;i++){
    if(Girls[i].footSize===prince1.footSizeFind) {
        console.log(Girls[i])
    }
}*/





