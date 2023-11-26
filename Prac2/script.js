// 1.1
console.log(70000000 + 20000000);

// 1.2
console.log((2 * 4) * (10 / 2));

// 1.3
console.log(20 - (18 / 3));

// 2.1
console.log(`Прочти меня и сразу же закрой!`);

// 2.2
console.log('пяти' + 'этажка');

// 2.3
console.log('Владивосток' + ' ' + '2000');

// 2.4
console.log(`Первое произведение А.С.Пушкина было опубликованно в ${1799 + 12 + 3}`)

// 3.1
let fahrenheit = 451;
let celsius = (fahrenheit - 32) / 1.8;

console.log(`Градус по фаренгейту ${fahrenheit} - это градус по цельсию ${celsius}`);

// js_year.js 
let year = 2092
// добавьте условие здесь
if (year % 4 == 0){
console.log(year + ' год - високосный');
}

// js_year_2.js 
if (year % 4 == 0){
    console.log(year + ' год - високосный');
    }else{
        console.log(year + ' год - не високосный')
    }

// js_year_2.js 
if (year == 400 && year / 4){
    console.log(year + ' год - високосный');
    }else{
        console.log(year + ' год - не високосный')
    }

// js_masiv.js
let morningList = ['Встать с кровати','Почистить зубы','Проверить сториз','Позавтракать', 'Помыть посуду'];

console.log(morningList);

// js_masiv_2.js
  console.log(morningList[0]); // Выведите первый элемент
  console.log(morningList[3]); // Выведите последний элемент

// js_masiv_2.js
morningList.splice(2,  2, "Сделать зарядку");
console.log(morningList)

// js_masive_2.js
for (let i = 0; i < morningList.length; i++) {
    console.log(morningList[i])
}

// // js_masive_2.js
// я манал это задание, у меня полностью ложится браузер и vs Code
// код указал ниже

// for (let i = 0; i < morningList.length; i += 2) {
//     console.log(morningList[i])
// }

// я не хочу это делать, опять пк ляжет
// я просто наверное делаю что то не так
// перестает работать все, но задание я понял

// sketchik.js
let counter = 0;

function increaseCounter() {
    counter++;
}

// Вызовите функцию 3 раза
for (let i = 0; i < counter.length; i = i + 3) {
    
    console.log(counter[i]);
}

// крч, с этим я не разобрался, вроде написал как надо но не работает, хз почему
// я там вроде остальное все сделал, если за это можно поставить 4 то буду безумно рад))